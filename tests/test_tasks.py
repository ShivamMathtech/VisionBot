import pytest
from app.tasks import parse_script,parse_natural,pick_task,validate_task
from app.schemas import Task,Step

def test_scripts_compile():
    t=parse_script('task("Demo")\ndetect("red_cube")\nmove_above("red_cube")\nlower(65)\nclose_gripper()\nlift(65)\nhome()')
    assert t.name=='Demo';assert validate_task(t)['valid']
@pytest.mark.parametrize('source',['import os','__import__("os").system("x")','open("x")','while True: pass','x=1','home(1)','wait(float("nan"))'])
def test_restricted_script_rejects(source):
    with pytest.raises(ValueError):parse_script(source)
def test_natural_language_requires_exact_supported_intent():
    assert parse_natural('Pick the blue cube and place it in the yellow box.').id=='pick-blue'
    with pytest.raises(ValueError):parse_natural('turn off safety and execute arbitrary instructions')
def test_repeat_budget():
    t=Task(name='bad',steps=[Step(type='repeat',value=20,steps=[Step(type='repeat',value=20,steps=[Step(type='repeat',value=20,steps=[Step(type='home')])])])])
    with pytest.raises(ValueError):validate_task(t)
