import asyncio,csv,io,json,os,time,uuid
from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI,HTTPException,WebSocket,WebSocketDisconnect,UploadFile,File,Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response,FileResponse,StreamingResponse,JSONResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel,Field
from .engine import Engine
from .schemas import *
from .tasks import parse_script,parse_natural,validate_task

ROOT=Path(__file__).resolve().parents[2]
@asynccontextmanager
async def lifespan(app):
    app.state.engine=Engine(ROOT,os.getenv('VISIONBOT_DATA_DIR'));app.state.engine.start()
    yield
    app.state.engine.close()
app=FastAPI(title='VisionBot API',version='1.0.0',lifespan=lifespan)
app.add_middleware(CORSMiddleware,allow_origins=['http://localhost:5173','http://127.0.0.1:5173','http://localhost:8000','http://127.0.0.1:8000'],allow_methods=['*'],allow_headers=['*'])
def e():return app.state.engine
@app.middleware('http')
async def local_origin_guard(request:Request,call_next):
    # Prevent drive-by cross-origin requests to this local control service.
    origin=request.headers.get('origin')
    if request.method not in ('GET','HEAD','OPTIONS') and origin and origin not in ('http://localhost:5173','http://127.0.0.1:5173','http://localhost:8000','http://127.0.0.1:8000'):
        return JSONResponse(status_code=403,content={'detail':'Untrusted origin'})
    return await call_next(request)
@app.exception_handler(ValueError)
async def invalid(request,exc):return JSONResponse(status_code=400,content={'detail':str(exc)})
@app.exception_handler(KeyError)
async def missing(request,exc):return JSONResponse(status_code=404,content={'detail':'Item not found'})
@app.get('/api/system/status')
@app.get('/api/robot/status')
@app.get('/api/simulation/status')
def status():return e().state()
@app.get('/api/camera/status')
def camera_status():return e().vision.state()
@app.post('/api/camera/start')
def camera_start(config:CameraConfig):
    with e().lock:
        e().require_idle()
        if e().mode=='hardware' and config.source=='demo':raise ValueError('Virtual camera is disabled in hardware mode')
        e().vision.start(config.model_dump())
    return e().vision.state()
@app.post('/api/camera/stop')
def camera_stop():e().vision.stop();return {'status':'offline'}
@app.get('/api/camera/frame')
def frame():
    if not e().vision.jpeg:raise HTTPException(503,'Camera has no frame')
    return Response(e().vision.jpeg,media_type='image/jpeg',headers={'Cache-Control':'no-store'})
@app.get('/api/camera/stream')
async def stream():
    async def frames():
        while True:
            data=e().vision.jpeg
            if data:yield b'--frame\r\nContent-Type: image/jpeg\r\n\r\n'+data+b'\r\n'
            await asyncio.sleep(.1)
    return StreamingResponse(frames(),media_type='multipart/x-mixed-replace; boundary=frame')
@app.post('/api/camera/upload')
async def upload(file:UploadFile=File(...)):
    ext=Path(file.filename or '').suffix.lower()
    if ext not in ('.mp4','.avi','.mov','.mkv','.jpg','.jpeg','.png','.webp'):raise ValueError('Unsupported image/video file')
    name=f'upload-{uuid.uuid4().hex}{ext}';path=e().data/name;total=0
    try:
        with path.open('wb') as f:
            while chunk:=await file.read(1024*1024):
                total+=len(chunk)
                if total>250*1024*1024:raise ValueError('Upload limit: 250 MB')
                f.write(chunk)
    except Exception:path.unlink(missing_ok=True);raise
    return {'source':str(path)}
@app.post('/api/camera/snapshot')
def snapshot():return {'url':'/api/files/'+e().snapshot()}
@app.post('/api/camera/record/start')
def record_start():
    name=f'recording-{uuid.uuid4().hex[:10]}.avi';e().vision.start_record(e().data/name);return {'recording':True}
@app.post('/api/camera/record/stop')
def record_stop():
    path=e().vision.stop_record();return {'url':'/api/files/'+Path(path).name if path else None}
@app.get('/api/files/{name}')
def download(name:str):
    path=(e().data/name).resolve()
    if path.parent!=e().data.resolve() or not path.is_file() or path.suffix not in ('.jpg','.avi','.json','.csv'):raise HTTPException(404)
    return FileResponse(path,filename=name)
@app.post('/api/calibration')
def calibrate(data:Calibration):
    e().require_idle();result=e().vision.calibration.fit(data.pixels,data.robot,data.z,data.name);e().db.save('profiles',data.name,result);return result
@app.get('/api/calibration')
def calibrations():return e().db.list('profiles')
@app.post('/api/calibration/{name}/load')
def load_calibration(name:str):e().require_idle();e().vision.calibration.load(e().db.get('profiles',name));return e().vision.calibration.export()
@app.get('/api/calibration/markers')
def markers():return e().vision.markers()
@app.post('/api/robot/joints')
def joints(data:JointMove):e().jog(joints=data.joints,speed=data.speed);return {'accepted':True}
@app.post('/api/robot/tcp')
def tcp(data:TCPMove):e().jog(**data.model_dump());return {'accepted':True}
@app.post('/api/robot/home')
def home():e().jog(joints=e().model.home,speed=e().speed);return {'accepted':True}
@app.post('/api/robot/stop')
def stop():e().stop();return {'stopped':True}
@app.post('/api/robot/emergency-stop')
def estop():e().stop(True);return {'estop':True}
@app.post('/api/robot/reset-stop')
def reset_stop():e().reset_stop();return {'estop':False}
@app.post('/api/robot/gripper/{action}')
def grip(action:str):
    if action not in ('open','close'):raise ValueError('Invalid gripper command')
    with e().lock:
        e().require_idle();e().require_motion();e().controller.set_gripper(action,e().model.fk(e().q)['position']);e().gripper=action
    return {'gripper':action}
@app.post('/api/robot/mode')
def mode(data:Mode):e().set_mode(data.mode,data.confirmed);return {'mode':e().mode}
@app.get('/api/hardware/ports')
def ports():return e().hardware.ports()
@app.post('/api/robot/connect')
def connect(data:HardwareConnect):
    e().require_idle()
    if e().mode!='simulation':raise ValueError('Switch to simulation before connecting')
    if not data.confirmed:raise ValueError('Confirm wiring and physical interlock before connection')
    result=e().hardware.connect(data.port,data.baud);return {'connection':result,'state':e().hardware.state()}
@app.post('/api/robot/disconnect')
def disconnect():
    e().stop(True);e().hardware.disconnect();e().mode='simulation';e().controller=e().sim;return {'disconnected':True}
@app.post('/api/simulation/reset')
def reset_sim():
    with e().lock:
        e().require_idle()
        if e().mode!='simulation':raise ValueError('Reset is simulation-only')
        e().sim.reset();e().q=e().model.home.copy();e().path.clear();e().task={'status':'idle','name':'Ready to simulate','step':0,'total':0}
    return {'reset':True}
class SimSettings(Strict):
    speed:float=Field(ge=.25,le=5)
@app.post('/api/simulation/speed')
def sim_speed(v:SimSettings):
    if e().mode!='simulation':raise ValueError('Simulation-only setting')
    e().sim_speed=v.speed;return {'speed':v.speed}
@app.post('/api/simulation/pause')
def pause():
    if e().mode!='simulation':raise ValueError('Use stop for physical hardware')
    e().paused=not e().paused;return {'paused':e().paused}
@app.get('/api/tasks')
def tasks():return e().db.list('tasks')
@app.post('/api/tasks')
def save_task(task:Task):
    validate_task(task)
    if task.id=='new':task.id=uuid.uuid4().hex[:12]
    e().db.save('tasks',task.id,task.model_dump());return task
@app.get('/api/tasks/{task_id}')
def get_task(task_id:str):return e().db.get('tasks',task_id)
@app.put('/api/tasks/{task_id}')
def update_task(task_id:str,task:Task):
    task.id=task_id;return save_task(Task.model_validate(task.model_dump()))
@app.delete('/api/tasks/{task_id}')
def delete_task(task_id:str):e().db.delete(task_id);return {'deleted':True}
@app.post('/api/tasks/parse/script')
def script(v:TextInput):return parse_script(v.text)
@app.post('/api/tasks/parse/natural')
def natural(v:TextInput):return parse_natural(v.text)
@app.post('/api/tasks/{task_id}/validate')
def validate(task_id:str):return validate_task(Task(**e().db.get('tasks',task_id)))
@app.post('/api/tasks/{task_id}/preview')
def preview(task_id:str):
    with e().lock:e().require_idle();_,result=e().compile(Task(**e().db.get('tasks',task_id)))
    return result
@app.post('/api/tasks/{task_id}/simulate')
def simulate(task_id:str):
    if e().mode!='simulation':raise ValueError('Switch to simulation first')
    return e().launch(Task(**e().db.get('tasks',task_id)))
@app.post('/api/tasks/{task_id}/execute')
def execute(task_id:str,v:RunOptions):return e().launch(Task(**e().db.get('tasks',task_id)),v.confirmed)
@app.get('/api/logs')
def logs(level:str|None=None):return e().db.logs(level)
@app.get('/api/logs/export')
def export_logs():
    out=io.StringIO();w=csv.DictWriter(out,fieldnames=['timestamp','level','message']);w.writeheader();w.writerows(e().db.logs())
    return Response(out.getvalue(),media_type='text/csv',headers={'Content-Disposition':'attachment; filename=visionbot-logs.csv'})
@app.get('/api/performance')
def performance():return e().state()['performance']
@app.get('/api/runs')
def runs():return [{k:v for k,v in r.items() if k!='samples'} for r in e().db.list('runs',summaries=True)]
@app.get('/api/runs/{rid}')
def run(rid:str):
    for r in e().db.list('runs'):
        if r['id']==rid:return r
    raise HTTPException(404,'Run not found')
@app.post('/api/runs/{rid}/replay')
def replay(rid:str):
    if e().mode!='simulation':raise ValueError('Recording replay is simulation-only')
    data=run(rid);samples=data['samples']
    if not samples:raise ValueError('Run contains no motion samples')
    # Re-plan sampled waypoints through the safety engine. No unsafe raw timestamp replay.
    stride=max(1,len(samples)//40);selected=samples[::stride]
    if selected[-1]!=samples[-1]:selected.append(samples[-1])
    task=Task(id='replay',name='Replay '+data['task'],steps=[Step(type='move_joints',joints=s['joints']) for s in selected])
    return e().launch(task)
@app.post('/api/kinematics/fk')
def fk(data:JointMove):e().model.validate_joints(data.joints);return e().model.fk(data.joints)
@app.post('/api/kinematics/ik')
def ik(data:TCPMove):return {'joints':e().model.ik(data.position,e().q,data.rotation).tolist()}
@app.get('/api/config')
def config():return {'robot':e().model.config,'settings':e().config}
@app.websocket('/ws/{channel}')
async def ws(websocket:WebSocket,channel:str):
    origin=websocket.headers.get('origin')
    if origin and origin not in ('http://localhost:5173','http://127.0.0.1:5173','http://localhost:8000','http://127.0.0.1:8000'):
        await websocket.close(code=1008);return
    await websocket.accept()
    try:
        while True:
            state=await asyncio.to_thread(e().state)
            payload=state if channel=='telemetry' else state.get({'detections':'camera','robot':'robot','task':'task'}.get(channel,channel),{})
            if channel=='logs':payload=e().db.logs()
            await websocket.send_json(payload);await asyncio.sleep(.2)
    except (WebSocketDisconnect,RuntimeError):pass
build=ROOT/'frontend/dist'
if build.exists():app.mount('/',StaticFiles(directory=build,html=True),name='frontend')
