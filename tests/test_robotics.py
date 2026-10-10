from pathlib import Path
import numpy as np
import pytest,yaml
from app.robotics import RobotModel,SafetyError
from app.vision import CalibrationProfile,Tracker
ROOT=Path(__file__).resolve().parents[1]
@pytest.fixture
def robot():return RobotModel(yaml.safe_load((ROOT/'configs/robot.yaml').read_text()))
def test_fk_ik_roundtrip(robot):
    q=[20,70,-95,25,10,0];p=robot.fk(q)['position'];sol=robot.ik(p,robot.home)
    assert np.linalg.norm(np.array(robot.fk(sol)['position'])-p)<.8
    assert np.all(sol>=robot.low) and np.all(sol<=robot.high)
def test_unreachable_and_nonfinite(robot):
    for p in ([9999,0,20],[10,20,float('nan')]):
        with pytest.raises(SafetyError):robot.ik(p,robot.home)
    with pytest.raises(SafetyError):robot.validate_joints([float('nan')]*6)
    with pytest.raises(SafetyError):robot.validate_joints([999]*6)
def test_quintic_bounds(robot):
    end=robot.home+np.array([15,5,-5,2,0,0]);p=robot.plan(robot.home,end,.6)
    q=np.array(p.positions);t=np.array(p.times)
    v=np.diff(q,axis=0)/np.diff(t)[:,None];a=np.diff(v,axis=0)/np.diff(t)[:-1,None]
    assert np.max(np.abs(v)/np.array([j['velocity']*.6 for j in robot.joints]))<=1.001
    assert np.max(np.abs(a)/np.array([j['acceleration']*.6 for j in robot.joints]))<=1.001
    np.testing.assert_allclose(q[-1],end,atol=1e-7)
def test_forbidden_zone_blocks(robot):
    tcp=robot.fk(robot.home)['position'];robot.config['forbidden_zones']=[{'min':(np.array(tcp)-20).tolist(),'max':(np.array(tcp)+20).tolist()}]
    with pytest.raises(SafetyError):robot.validate_pose(robot.home)
def test_calibration_and_degenerate():
    c=CalibrationProfile();c.fit([[0,0],[100,0],[100,100],[0,100]],[[10,20],[210,20],[210,220],[10,220]],30)
    np.testing.assert_allclose(c.transform([50,50]),[110,120,30],atol=1e-6)
    with pytest.raises(ValueError):c.fit([[0,0],[1,1],[2,2],[3,3]],[[0,0],[1,1],[2,2],[3,3]])
def test_tracker_ids_and_expiry():
    tr=Tracker();base=lambda x:{'class_name':'red_cube','center':[x,50],'bbox':[0,0,10,10],'confidence':1}
    a=tr.update([base(10)],1)[0];b=tr.update([base(12)],1.1)[0];c=tr.update([base(12)],5)[0]
    assert a['id']==b['id'] and c['id']!=a['id'];assert b['velocity'][0]>0
