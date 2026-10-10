import time,threading
from pathlib import Path
import numpy as np
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.engine import Engine
from app.tasks import pick_task
from app.hardware import ArduinoConnectionManager
from app.robotics import SafetyError

@pytest.fixture
def client(tmp_path,monkeypatch):
    monkeypatch.setenv('VISIONBOT_DATA_DIR',str(tmp_path))
    with TestClient(app) as c:
        for _ in range(100):
            if c.get('/api/camera/status').json()['detections']:break
            time.sleep(.02)
        yield c

def wait_run(c,timeout=30):
    t=time.monotonic()
    while time.monotonic()-t<timeout:
        s=c.get('/api/system/status').json()
        if not s['robot']['busy']:return s
        time.sleep(.05)
    pytest.fail('Task timeout')

def test_camera_task_simulation_and_reports(client):
    s=client.get('/api/system/status').json();assert s['camera']['status']=='online';assert len(s['camera']['detections'])==4
    assert client.get('/api/camera/frame').headers['content-type']=='image/jpeg'
    task=client.get('/api/tasks').json()[0]
    preview=client.post(f'/api/tasks/{task["id"]}/preview',json={});assert preview.status_code==200,preview.text
    assert preview.json()['trajectory'];client.post('/api/simulation/speed',json={'speed':5})
    r=client.post(f'/api/tasks/{task["id"]}/simulate',json={});assert r.status_code==200,r.text
    final=wait_run(client);assert final['task']['status']=='completed',final['task']
    cube=next(o for o in final['simulation']['objects'] if o['name']=='red_cube')
    assert np.linalg.norm(np.array(cube['position'])[:2]-[130,130])<10
    reports=client.get('/api/runs').json();assert reports[0]['status']=='success'
    full=client.get('/api/runs/'+reports[0]['id']).json();assert full['samples'];assert full['position_error_mm'] is None

def test_estop_latch_prevents_motion(client):
    client.post('/api/robot/joints',json={'joints':[20,55,-95,40,0,0],'speed':.2})
    assert client.post('/api/robot/emergency-stop',json={}).status_code==200
    s=wait_run(client);q=s['robot']['joints'];time.sleep(.15)
    assert client.get('/api/system/status').json()['robot']['joints']==q
    assert client.post('/api/robot/home',json={}).status_code==400
    assert client.post('/api/robot/reset-stop',json={}).status_code==200
    assert not client.get('/api/system/status').json()['safety']['estop']

def test_hardware_gate_invalid_input_origin_and_crud(client):
    assert client.post('/api/robot/mode',json={'mode':'hardware','confirmed':False}).status_code==400
    assert client.post('/api/robot/joints',json={'joints':[900]*6}).status_code==400
    assert client.post('/api/robot/home',json={},headers={'Origin':'https://evil.invalid'}).status_code==403
    task={'id':'test-save','name':'Wait','steps':[{'type':'wait','value':.02}]}
    assert client.post('/api/tasks',json=task).status_code==200
    task['name']='Updated';assert client.put('/api/tasks/test-save',json=task).status_code==200
    assert client.get('/api/tasks/test-save').json()['name']=='Updated'
    assert client.delete('/api/tasks/test-save').status_code==200
    assert client.get('/api/tasks/test-save').status_code==404
    assert client.post('/api/tasks/parse/script',json={'text':'import os'}).status_code==400
    with client.websocket_connect('/ws/telemetry') as ws:assert ws.receive_json()['mode']=='simulation'

def test_missing_model_and_calibration(client):
    r=client.post('/api/camera/start',json={'source':'demo','detector':'yolo','model':'models/missing.pt'})
    assert r.status_code==400 and 'missing' in r.text.lower()
    assert client.post('/api/camera/start',json={'source':'demo'}).status_code==200
    pts={'pixels':[[0,0],[640,0],[640,480],[0,480]],'robot':[[0,0],[320,0],[320,240],[0,240]],'z':25,'name':'test'}
    assert client.post('/api/calibration',json=pts).status_code==200
    assert client.get('/api/calibration').json()[0]['name']=='test'

class MockSerial:
    is_open=True
    def __init__(self,connection):self.connection=connection;self.written=[]
    def write(self,data):
        import json
        packet=json.loads(data);self.written.append(packet)
        if packet['type']!='ESTOP':
            slot=self.connection.pending.pop(packet['command_id']);slot['reply']={'type':'ACK','command_id':packet['command_id'],'protocol':1};slot['event'].set()
    def close(self):self.is_open=False

def test_arduino_ack_and_controller():
    from app.simulation import ArduinoRobotController
    c=ArduinoConnectionManager();c.serial=MockSerial(c);controller=ArduinoRobotController(c)
    controller.move_joints([0,55,-95,40,0,0]);controller.set_gripper('open',[0,0,0]);controller.stop()
    assert [p['type'] for p in c.serial.written]==['MOVE_JOINTS','GRIPPER','ESTOP']

def test_upload_image_snapshot_and_record(client):
    import cv2
    img=np.zeros((480,640,3),np.uint8);cv2.rectangle(img,(200,150),(280,230),(0,0,255),-1)
    payload=cv2.imencode('.png',img)[1].tobytes()
    up=client.post('/api/camera/upload',files={'file':('sample.png',payload,'image/png')});assert up.status_code==200
    assert client.post('/api/camera/start',json={'source':up.json()['source']}).status_code==200
    for _ in range(100):
        camera=client.get('/api/camera/status').json()
        if camera['detections']:break
        time.sleep(.02)
    assert camera['detections'][0]['class_name']=='red_cube'
    assert camera['detections'][0]['robot_position'] is None
    snap=client.post('/api/camera/snapshot',json={}).json();assert client.get(snap['url']).status_code==200
    assert client.post('/api/camera/record/start',json={}).status_code==200
    time.sleep(.2);record=client.post('/api/camera/record/stop',json={}).json()
    assert client.get(record['url']).status_code==200
    assert client.post('/api/camera/upload',files={'file':('bad.exe',b'x')}).status_code==400

def test_pause_and_cancel_during_task(client):
    assert client.post('/api/robot/joints',json={'joints':[30,55,-95,40,0,0],'speed':.2}).status_code==200
    client.post('/api/simulation/pause',json={});time.sleep(.1)
    a=client.get('/api/system/status').json()['robot']['joints'];time.sleep(.1)
    b=client.get('/api/system/status').json()['robot']['joints'];assert a==b
    assert client.post('/api/robot/home',json={}).status_code==400
    client.post('/api/robot/stop',json={});s=wait_run(client);assert not s['robot']['busy']

def test_serial_timeout_fault_callback():
    c=ArduinoConnectionManager();faults=[];c.fault_callback=faults.append
    class SilentSerial:
        is_open=True
        def write(self,data):pass
    c.serial=SilentSerial()
    with pytest.raises(ValueError,match='ACK timeout'):c.send('HELLO')
    assert faults and not c.connected
