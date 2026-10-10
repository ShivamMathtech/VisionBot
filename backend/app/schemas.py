from typing import Literal
from pydantic import BaseModel,ConfigDict,Field
class Strict(BaseModel):
    model_config=ConfigDict(extra='forbid',allow_inf_nan=False)
class Step(Strict):
    type:Literal['detect','move_above','move_to','move_joints','lower','lift','home','gripper','wait','speed','capture','repeat','condition']
    target:str|None=None
    position:list[float]|None=Field(default=None,min_length=3,max_length=3)
    joints:list[float]|None=Field(default=None,min_length=4,max_length=6)
    value:float|None=None
    action:Literal['open','close']|None=None
    enabled:bool=True
    steps:list['Step']=Field(default_factory=list,max_length=50)
    otherwise:list['Step']=Field(default_factory=list,max_length=50)
class Task(Strict):
    id:str=Field(default='new',pattern=r'^[a-zA-Z0-9_-]{1,64}$')
    name:str=Field(min_length=1,max_length=100)
    steps:list[Step]=Field(min_length=1,max_length=100)
class JointMove(Strict):
    joints:list[float]
    speed:float=Field(default=0.5,ge=0.01,le=1)
class TCPMove(Strict):
    position:list[float]=Field(min_length=3,max_length=3)
    rotation:list[float]|None=Field(default=None,min_length=3,max_length=3)
    speed:float=Field(default=0.5,ge=0.01,le=1)
    linear:bool=False
class CameraConfig(Strict):
    source:str='demo'
    detector:Literal['color','yolo']='color'
    model:str='models/detector.pt'
    confidence:float=Field(default=0.5,ge=0.05,le=0.99)
    fps:int=Field(default=12,ge=1,le=30)
    classes:list[str]=Field(default_factory=list)
class Calibration(Strict):
    name:str=Field(default='workspace',pattern=r'^[a-zA-Z0-9_-]{1,64}$')
    pixels:list[list[float]]=Field(min_length=4,max_length=100)
    robot:list[list[float]]=Field(min_length=4,max_length=100)
    z:float=Field(default=25,ge=0,le=400)
class HardwareConnect(Strict):
    port:str
    baud:int=115200
    confirmed:bool=False
class RunOptions(Strict):
    confirmed:bool=False
class TextInput(Strict):
    text:str=Field(max_length=20000)
class Mode(Strict):
    mode:Literal['simulation','hardware']
    confirmed:bool=False
