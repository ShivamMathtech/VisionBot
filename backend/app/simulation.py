"""Kinematic world with optional PyBullet rigid-body objects; same DH robot in both."""
from abc import ABC,abstractmethod
import copy,math
from pathlib import Path
import numpy as np
from .vision import DEMO_OBJECTS

class RobotController(ABC):
    @abstractmethod
    def move_joints(self,q):...
    @abstractmethod
    def set_gripper(self,action,tcp):...
    @abstractmethod
    def stop(self):...

class SimulationRobotController(RobotController):
    def __init__(self,model,root):
        self.model=model;self.q=model.home.copy();self.objects=copy.deepcopy(DEMO_OBJECTS);self.held=None;self.gripper='open';self.client=None;self.engine='Kinematic';self.body=None;self.indices=[];self.object_ids={}
        try:
            import pybullet as p
            self.p=p;self.client=p.connect(p.DIRECT);p.setGravity(0,0,-9.81,physicsClientId=self.client)
            plane=p.createCollisionShape(p.GEOM_PLANE,physicsClientId=self.client);p.createMultiBody(0,plane,physicsClientId=self.client)
            path=Path(root)/'simulation/robots/visionbot.urdf';self.write_urdf(path)
            self.body=p.loadURDF(str(path),useFixedBase=True,physicsClientId=self.client)
            self.indices=[i for i in range(p.getNumJoints(self.body,physicsClientId=self.client)) if p.getJointInfo(self.body,i,physicsClientId=self.client)[2]==p.JOINT_REVOLUTE]
            shape=p.createCollisionShape(p.GEOM_BOX,halfExtents=[.025,.025,.025],physicsClientId=self.client)
            for o in self.objects:
                if o['name']=='target_zone':continue
                self.object_ids[o['name']]=p.createMultiBody(.04,shape,basePosition=np.array(o['position'])/1000,physicsClientId=self.client)
            self.engine='PyBullet (kinematic arm / dynamic objects)';self.move_joints(self.q)
        except ImportError:pass
    def write_urdf(self,path):
        def link(name,geometry='<sphere radius="0.012"/>',origin='0 0 0'):
            return f'<link name="{name}"><inertial><mass value="0.1"/><inertia ixx="0.001" iyy="0.001" izz="0.001" ixy="0" ixz="0" iyz="0"/></inertial><visual><origin xyz="{origin}"/><geometry>{geometry}</geometry></visual><collision><origin xyz="{origin}"/><geometry>{geometry}</geometry></collision></link>'
        parts=['<robot name="VisionBot">',link('base')];parent='base'
        for i,j in enumerate(self.model.joints):
            rotor=f'rotor{i}';tip=f'tip{i}';a=j['a']/1000;d=j['d']/1000
            parts += [link(rotor,f'<box size="{max(abs(a),.015)} 0.018 0.018"/>',f'{a/2} 0 0'),link(tip)]
            parts.append(f'<joint name="J{i+1}" type="revolute"><parent link="{parent}"/><child link="{rotor}"/><origin xyz="0 0 {d}" rpy="0 0 {math.radians(j.get("offset",0))}"/><axis xyz="0 0 1"/><limit lower="{math.radians(j["min"])}" upper="{math.radians(j["max"])}" effort="5" velocity="{math.radians(j["velocity"])}"/></joint>')
            parts.append(f'<joint name="fixed{i}" type="fixed"><parent link="{rotor}"/><child link="{tip}"/><origin xyz="{a} 0 0" rpy="{math.radians(j["alpha"])} 0 0"/></joint>');parent=tip
        parts.append('</robot>');path.parent.mkdir(parents=True,exist_ok=True);path.write_text('\n'.join(parts))
    def move_joints(self,q):
        self.q=np.asarray(q,float).copy()
        if self.client is not None:
            for i,v in zip(self.indices,q):self.p.resetJointState(self.body,i,math.radians(v),physicsClientId=self.client)
            for _ in range(4):self.p.stepSimulation(physicsClientId=self.client)
        tcp=np.array(self.model.fk(q)['position'])
        for o in self.objects:
            if o['name']==self.held:
                o['position']=(tcp-[0,0,35]).tolist()
                if self.client is not None:self.p.resetBasePositionAndOrientation(self.object_ids[o['name']],np.array(o['position'])/1000,[0,0,0,1],physicsClientId=self.client)
            elif self.client is not None and o['name'] in self.object_ids:
                pos,_=self.p.getBasePositionAndOrientation(self.object_ids[o['name']],physicsClientId=self.client);o['position']=(np.array(pos)*1000).tolist()
    def set_gripper(self,action,tcp):
        self.gripper=action
        if action=='close':
            candidates=[o for o in self.objects if o['name']!='target_zone' and np.linalg.norm(np.array(o['position'])+np.array([0,0,35])-tcp)<35]
            self.held=candidates[0]['name'] if candidates else None
        else:
            if self.held:
                obj=next(o for o in self.objects if o['name']==self.held);obj['position'][2]=25.
            self.held=None
    def reset(self):
        self.held=None;self.gripper='open';self.objects[:]=copy.deepcopy(DEMO_OBJECTS)
        if self.client is not None:
            for o in self.objects:
                if o['name'] in self.object_ids:self.p.resetBasePositionAndOrientation(self.object_ids[o['name']],np.array(o['position'])/1000,[0,0,0,1],physicsClientId=self.client)
        self.move_joints(self.model.home)
    def stop(self):pass
    def close(self):
        if self.client is not None:self.p.disconnect(self.client)

class ArduinoRobotController(RobotController):
    def __init__(self,connection):self.connection=connection
    def move_joints(self,q):self.connection.send('MOVE_JOINTS',joints=list(map(float,q)))
    def set_gripper(self,action,tcp):self.connection.send('GRIPPER',action=action)
    def stop(self):self.connection.emergency_stop()
