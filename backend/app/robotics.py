"""Standard-DH kinematics (mm/degrees), bounded IK, quintic trajectories."""
from dataclasses import dataclass
import math
import numpy as np
from scipy.optimize import least_squares
from scipy.spatial.transform import Rotation

class SafetyError(ValueError):
    pass

@dataclass
class Trajectory:
    positions: list
    times: list
    duration: float
    distance_mm: float

class RobotModel:
    def __init__(self, config):
        self.config = config
        self.joints = config['joints']
        self.n = len(self.joints)
        self.home = np.array(config['home'], dtype=float)
        self.low = np.array([j['min'] for j in self.joints])
        self.high = np.array([j['max'] for j in self.joints])
        self.validate_joints(self.home)

    def validate_joints(self, q):
        q = np.asarray(q, dtype=float)
        if q.shape != (self.n,) or not np.all(np.isfinite(q)):
            raise SafetyError(f'Expected {self.n} finite joint angles')
        if np.any(q < self.low - 1e-6) or np.any(q > self.high + 1e-6):
            raise SafetyError('Joint limit exceeded')
        return q

    def frames(self, q):
        T = np.eye(4)
        frames = [T.copy()]
        for v, j in zip(q, self.joints):
            t, al = np.radians([v+j.get('offset', 0), j['alpha']])
            c,s,ca,sa = np.cos(t),np.sin(t),np.cos(al),np.sin(al)
            a,d = j['a'],j['d']
            T = T @ np.array([[c,-s*ca,s*sa,a*c],[s,c*ca,-c*sa,a*s],[0,sa,ca,d],[0,0,0,1]])
            frames.append(T.copy())
        return frames

    def fk(self, q):
        T = self.frames(q)[-1]
        return {'position': T[:3,3].tolist(), 'rotation': Rotation.from_matrix(T[:3,:3]).as_euler('xyz',degrees=True).tolist()}

    def ik(self, target, seed, rotation=None):
        target=np.asarray(target,float)
        self.validate_target(target)
        desired = Rotation.from_euler('xyz', rotation, degrees=True).as_matrix() if rotation is not None else None
        def error(q):
            T=self.frames(q)[-1]
            e=T[:3,3]-target
            if desired is not None:
                e=np.r_[e,Rotation.from_matrix(desired.T @ T[:3,:3]).as_rotvec()*80]
            return e
        seeds=[np.clip(seed,self.low+1e-5,self.high-1e-5),self.home, (self.low+self.high)/2]
        for initial in seeds:
            fit=least_squares(error,initial,bounds=(self.low,self.high),max_nfev=250,ftol=1e-8,xtol=1e-8)
            if np.linalg.norm(error(fit.x)) < 0.8:
                self.validate_pose(fit.x)
                return fit.x
        raise SafetyError('Target unreachable: no valid IK solution within 0.8 mm / weighted orientation tolerance')

    def validate_target(self,p):
        p=np.asarray(p,float)
        w=self.config['workspace']
        if p.shape!=(3,) or not np.all(np.isfinite(p)) or np.any(p < w['min']) or np.any(p > w['max']):
            raise SafetyError('TCP outside configured workspace')

    def validate_pose(self,q):
        self.validate_joints(q)
        frames=self.frames(q)
        self.validate_target(frames[-1][:3,3])
        pts=np.array([f[:3,3] for f in frames])
        radius=self.config.get('link_radius',10)
        # Conservative swept-link samples, plus table collision. Base mount excluded.
        for i in range(1,len(pts)-1):
            samples=np.linspace(pts[i],pts[i+1],max(2,int(np.linalg.norm(pts[i+1]-pts[i])/5)+1))
            if np.any(samples[:,2] < radius):
                raise SafetyError('Link would intersect the table')
            for zone in self.config.get('forbidden_zones',[]):
                low=np.asarray(zone['min'])-radius; high=np.asarray(zone['max'])+radius
                if np.any(np.all((samples>=low)&(samples<=high),axis=1)):
                    raise SafetyError('Link intersects forbidden zone')
        return True

    def plan(self,start,end,speed=0.5,dt=0.04):
        start=self.validate_joints(start);end=self.validate_joints(end)
        if not math.isfinite(speed) or not 0.01<=speed<=1: raise SafetyError('Speed must be 0.01–1')
        delta=np.abs(end-start)
        vmax=np.array([j['velocity'] for j in self.joints])*speed
        amax=np.array([j['acceleration'] for j in self.joints])*speed
        # max first derivative of quintic smoothstep = 1.875; second = 10/sqrt(3).
        duration=max(0.2,float(np.max(1.875*delta/vmax)),float(np.max(np.sqrt(5.774*delta/amax))))
        times=np.linspace(0,duration,math.ceil(duration/dt)+1)
        t=times/duration;s=10*t**3-15*t**4+6*t**5
        positions=start+(end-start)*s[:,None]
        for q in positions:self.validate_pose(q)
        tcp=np.array([self.frames(q)[-1][:3,3] for q in positions])
        return Trajectory(positions.tolist(),times.tolist(),duration,float(np.linalg.norm(np.diff(tcp,axis=0),axis=1).sum()))

    def linear(self,start,target,speed=0.5):
        origin=np.array(self.fk(start)['position']); end=np.asarray(target,float)
        self.validate_target(end);q=start;plans=[]
        for p in np.linspace(origin,end,max(2,int(np.linalg.norm(end-origin)/8)+1))[1:]:
            next_q=self.ik(p,q);plans.append(self.plan(q,next_q,speed));q=next_q
        return plans
