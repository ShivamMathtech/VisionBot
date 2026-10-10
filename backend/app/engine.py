import copy,json,threading,time,uuid
from collections import deque
from pathlib import Path
import numpy as np
import psutil,yaml
from .robotics import RobotModel,SafetyError
from .storage import Store
from .simulation import SimulationRobotController,ArduinoRobotController
from .hardware import ArduinoConnectionManager
from .vision import Vision
from .schemas import Task
from .tasks import pick_task,validate_task

class Engine:
    def __init__(self,root,data_dir=None):
        self.root=Path(root);self.data=Path(data_dir or self.root/'data');self.data.mkdir(parents=True,exist_ok=True)
        self.config=yaml.safe_load((self.root/'configs/config.yaml').read_text());self.model=RobotModel(yaml.safe_load((self.root/'configs/robot.yaml').read_text()))
        self.db=Store(self.data/'visionbot.db');self.sim=SimulationRobotController(self.model,root);self.hardware=ArduinoConnectionManager();self.hardware.fault_callback=self.fault
        self.arduino=ArduinoRobotController(self.hardware);self.controller=self.sim;self.mode='simulation';self.q=self.model.home.copy();self.gripper='open'
        self.lock=threading.RLock();self.cancel=threading.Event();self.thread=None;self.busy=False;self.estop=False;self.paused=False;self.speed=.5;self.sim_speed=float(self.config['simulation']['speed'])
        self.task={'status':'idle','name':'Ready to simulate','step':0,'total':0};self.path=deque(maxlen=400);self.samples=deque(maxlen=100);self.last_report=None
        self.vision=Vision(root,self.sim.objects)
        if not self.db.list('tasks'):self.db.save('tasks','pick-red',pick_task().model_dump())
        self.db.log('INFO','VisionBot started in simulation; hardware disabled')
    def start(self):
        self.vision.start({**self.config['camera'],**self.config['vision']})
    def close(self):
        self.stop(True)
        if self.thread:self.thread.join(3)
        self.vision.stop();self.hardware.disconnect();self.sim.close();self.db.db.close()
    def fault(self,reason):
        self.stop(True);self.db.log('SAFETY',reason)
    def require_idle(self):
        if self.busy:raise SafetyError('Robot busy; stop current operation first')
    def require_motion(self):
        if self.estop:raise SafetyError('Emergency stop latched. Explicit reset required.')
        if self.mode=='hardware' and (not self.hardware.connected or not self.hardware.telemetry.get('armed')):raise SafetyError('Hardware is not armed')
    def stop(self,emergency=False):
        self.cancel.set();self.paused=False
        if emergency:self.estop=True
        if self.mode=='hardware' or emergency:self.hardware.emergency_stop()
        if self.mode=='hardware':self.estop=True
        self.task['status']='emergency stopped' if self.estop else 'stopped'
    def reset_stop(self):
        with self.lock:
            self.require_idle()
            if self.mode=='hardware':
                self.hardware.send('RESET');self.mode='simulation';self.controller=self.sim;self.q=self.sim.q.copy()
            self.estop=False;self.cancel.clear();self.task['status']='idle';self.db.log('INFO','Emergency latch reset; hardware must be enabled again')
    def set_mode(self,mode,confirmed):
        with self.lock:
            self.require_idle()
            if self.estop:raise SafetyError('Reset emergency stop before changing mode')
            if mode=='hardware':
                if not confirmed:raise SafetyError('Explicit hardware confirmation required')
                if self.vision.config['source']=='demo':raise SafetyError('Select a real camera or stop the demo camera before enabling hardware')
                if self.model.n!=6:raise SafetyError('Supplied firmware supports six joints only')
                self.hardware.send('ARM');self.controller=self.arduino
                self.q=np.array(self.hardware.telemetry.get('joint_angles',self.model.home),float)
            else:
                if self.mode=='hardware':self.hardware.send('DISARM')
                self.controller=self.sim;self.q=self.sim.q.copy()
            self.mode=mode;self.db.log('INFO',f'Mode changed to {mode}')
    def _target_positions(self):
        return {d['class_name']:d['robot_position'] for d in self.vision.detections if d.get('robot_position') and time.time()-d['timestamp']<2}
    def compile(self,task):
        validate_task(task);q=self.q.copy();speed=self.speed;objects=self._target_positions();operations=[];duration=0.;distance=0.;trajectory=[]
        if self.mode=='hardware' and self.vision.calibration.name in (None,'demo-only') and any(s.target for s in task.steps):raise SafetyError('A real workspace calibration is required')
        def walk(steps):
            nonlocal q,speed,duration,distance
            for step in steps:
                if not step.enabled:continue
                t=step.type;v=step.value
                if t=='repeat':
                    for _ in range(int(v)):walk(step.steps)
                    continue
                if t=='condition':walk(step.steps if step.target in objects else step.otherwise);continue
                if t=='detect':
                    if step.target not in objects:raise SafetyError(f'No calibrated, recent detection for {step.target}')
                    operations.append({'type':'detect','target':step.target,'label':f'Detect {step.target}'})
                elif t=='speed':speed=v
                elif t in ('wait','gripper','capture'):
                    operations.append({'type':t,'value':v,'action':step.action,'label':f'{t} {step.action or v or ""}'});duration+=v or 0
                else:
                    if t=='home':end=self.model.home
                    elif t=='move_joints':end=step.joints
                    else:
                        p=np.array(self.model.fk(q)['position'])
                        if t in ('move_above','move_to'):
                            if step.target:
                                if step.target not in objects:raise SafetyError(f'Missing calibrated object: {step.target}')
                                p=np.array(objects[step.target],float)
                            elif step.position:p=np.array(step.position)
                            if t=='move_above':p[2]+=v if v is not None else 100
                        elif t=='lower':p[2]-=v
                        elif t=='lift':p[2]+=v
                        end=self.model.ik(p,q)
                    plan=self.model.plan(q,end,speed)
                    operations.append({'type':'motion','label':t.replace('_',' '),'trajectory':plan});q=np.array(end)
                    duration+=plan.duration;distance+=plan.distance_mm
                    trajectory.extend([self.model.fk(x)['position'] for x in plan.positions[::max(1,len(plan.positions)//25)]])
        walk(task.steps)
        if len(operations)>500:raise SafetyError('Too many operations')
        return operations,{'valid':True,'duration_s':round(duration,2),'distance_mm':round(distance,1),'steps':[o['label'] for o in operations],'trajectory':trajectory,'final_joints':q.tolist()}
    def launch(self,task,confirmed=False):
        with self.lock:
            self.require_idle();self.require_motion()
            if self.mode=='hardware' and not confirmed:raise SafetyError('Confirm physical execution for this task')
            operations,preview=self.compile(task)
            self.require_motion()
            self._launch(operations,task.name,preview)
            return preview
    def jog(self,joints=None,position=None,rotation=None,speed=.5,linear=False):
        with self.lock:
            self.require_idle();self.require_motion()
            if linear:
                plans=self.model.linear(self.q,position,speed)
            else:
                end=joints if joints is not None else self.model.ik(position,self.q,rotation)
                plans=[self.model.plan(self.q,end,speed)]
            self._launch([{'type':'motion','label':'Manual motion','trajectory':p} for p in plans],'Manual motion',{'distance_mm':sum(p.distance_mm for p in plans)})
    def _launch(self,ops,name,preview):
        self.cancel.clear();self.busy=True;self.paused=False;self.task={'name':name,'status':'running','step':0,'total':len(ops),'steps':[o['label'] for o in ops]}
        self.thread=threading.Thread(target=self._execute,args=(ops,name,preview),daemon=True);self.thread.start()
    def _wait(self,seconds):
        remaining=seconds
        while remaining>0:
            if self.cancel.is_set():raise InterruptedError('Stopped by operator')
            if self.paused:
                self.cancel.wait(.04);continue
            dt=min(.02,remaining);t=time.monotonic();self.cancel.wait(dt);remaining-=time.monotonic()-t
        if self.cancel.is_set():raise InterruptedError('Stopped by operator')
    def _execute(self,ops,name,preview):
        start=time.perf_counter();status='success';error=None;record=[]
        try:
            for index,op in enumerate(ops):
                self._wait(.001);self.require_motion();self.task['step']=index;self.task['current']=op['label']
                self.db.log('INFO',op['label'])
                if op['type']=='motion':
                    plan=op['trajectory'];last=0
                    for q,t in zip(plan.positions,plan.times):
                        rate=self.sim_speed if self.mode=='simulation' else 1
                        self._wait((t-last)/rate);last=t
                        # Recheck the latch immediately before every controller command.
                        with self.lock:
                            self.require_motion()
                            if self.cancel.is_set():raise InterruptedError('Stopped by operator')
                            self.controller.move_joints(q);self.q=np.array(q)
                        tcp=self.model.fk(q)['position'];self.path.append(tcp);record.append({'t':time.perf_counter()-start,'joints':q,'tcp':tcp})
                    if self.mode=='hardware':
                        deadline=time.monotonic()+5
                        while True:
                            measured=self.hardware.telemetry.get('joint_angles')
                            if measured and len(measured)==len(self.q) and np.max(np.abs(np.array(measured)-self.q))<1:break
                            if time.monotonic()>deadline:raise SafetyError('Firmware command-position settling timeout')
                            self._wait(.05)
                elif op['type']=='detect':
                    if op['target'] not in self._target_positions():raise SafetyError('Detection stale or calibration unavailable: '+op['target'])
                elif op['type']=='wait':self._wait(op['value'])
                elif op['type']=='gripper':
                    with self.lock:
                        self.require_motion();self.controller.set_gripper(op['action'],np.array(self.model.fk(self.q)['position']));self.gripper=op['action']
                elif op['type']=='capture':self.snapshot()
                self.task['step']=index+1
            self.task['status']='completed';self.db.log('SUCCESS',f'{name} completed')
        except InterruptedError as e:status='stopped';error=str(e);self.task['status']='emergency stopped' if self.estop else 'stopped'
        except Exception as e:
            status='failed';error=str(e);self.task['status']='failed';self.task['error']=error;self.db.log('ERROR',error)
            if self.mode=='hardware':self.stop(True)
        finally:
            report={'id':uuid.uuid4().hex[:12],'task':name,'mode':self.mode,'status':status,'timestamp':time.time(),'duration_s':round(time.perf_counter()-start,3),'distance_mm':round(preview.get('distance_mm',0),2),'error':error,'samples':record[::max(1,len(record)//1500)],'position_error_mm':None,'detection_accuracy':None,'note':'No measured hardware encoders or labeled detection ground truth; accuracy/error are not invented.'}
            self.db.run(report);self.last_report={k:v for k,v in report.items() if k!='samples'};self.busy=False
    def snapshot(self):
        if not self.vision.jpeg:raise ValueError('Camera has no frame')
        name=f'snapshot-{uuid.uuid4().hex[:10]}.jpg';(self.data/name).write_bytes(self.vision.jpeg);return name
    def state(self):
        frames=self.model.frames(self.q);runs=self.db.list('runs',summaries=True);finished=[r for r in runs if r['status'] in ('success','failed')]
        cpu=psutil.cpu_percent();ram=psutil.virtual_memory().percent
        return {'version':'1.0.0','mode':self.mode,'robot':{'name':self.model.config['name'],'joints':self.q.tolist(),'limits':self.model.joints,'tcp':self.model.fk(self.q),'points':[f[:3,3].tolist() for f in frames],'gripper':self.gripper,'busy':self.busy},'safety':{'estop':self.estop,'paused':self.paused},'simulation':{'engine':self.sim.engine,'objects':copy.deepcopy(self.sim.objects),'held':self.sim.held,'speed':self.sim_speed},'camera':self.vision.state(),'hardware':self.hardware.state(),'task':copy.deepcopy(self.task),'path':list(self.path),'performance':{'cpu':cpu,'ram':ram,'fps':self.vision.fps,'latency_ms':self.vision.latency,'task_success_rate':100*sum(r['status']=='success' for r in finished)/len(finished) if finished else None,'runs':len(runs),'position_error_mm':None,'detection_accuracy':None},'report':self.last_report}
