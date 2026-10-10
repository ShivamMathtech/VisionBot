"""Restricted AST grammar. No eval/exec, imports, attributes or filesystem access."""
import ast,re
from .schemas import Task,Step

def pick_task(color='red',zone='target_zone'):
    target=f'{color}_cube'
    return Task(id=f'pick-{color}',name=f'Pick and place {color} cube',steps=[
        Step(type='detect',target=target),Step(type='move_above',target=target,value=100),
        Step(type='lower',value=65),Step(type='gripper',action='close'),Step(type='lift',value=65),
        Step(type='move_above',target=zone,value=100),Step(type='lower',value=65),
        Step(type='gripper',action='open'),Step(type='lift',value=65),Step(type='home')])

def parse_natural(text):
    s=text.lower().strip()
    m=re.fullmatch(r'(?:please )?pick(?: up)? (?:the )?(red|blue|green) cube and place (?:it )?(?:in|into|at|on) (?:the )?(?:yellow box|target zone)[.!]?',s)
    if not m:raise ValueError('Supported grammar: Pick the red/blue/green cube and place it in the yellow box.')
    return pick_task(m[1])

def parse_script(text):
    try:tree=ast.parse(text)
    except SyntaxError as e:raise ValueError(f'Line {e.lineno}: {e.msg}')
    steps=[];name='Script task'
    def literal(n):
        try:return ast.literal_eval(n)
        except (ValueError,TypeError):raise ValueError('Only literal arguments are allowed')
    for node in tree.body:
        if not isinstance(node,ast.Expr) or not isinstance(node.value,ast.Call):raise ValueError('Use one allowed function call per line; no Python statements')
        c=node.value
        if not isinstance(c.func,ast.Name) or c.keywords:raise ValueError('Only direct calls with positional literal arguments are allowed')
        fn=c.func.id;args=[literal(a) for a in c.args]
        arities={'task':1,'detect':1,'move_above':1,'move_to':1,'move_joints':1,'lower':1,'lift':1,'wait':1,'speed':1,'home':0,'open_gripper':0,'close_gripper':0,'capture':0}
        if fn not in arities or len(args)!=arities[fn]:raise ValueError(f'Unsupported function or argument count: {fn}')
        if fn=='task':name=str(args[0]);continue
        if fn in ('open_gripper','close_gripper'):steps.append(Step(type='gripper',action=fn.split('_')[0]))
        elif fn in ('lower','lift','wait','speed'):steps.append(Step(type=fn,value=args[0]))
        elif fn in ('detect','move_above'):steps.append(Step(type=fn,target=args[0]))
        elif fn=='move_to':steps.append(Step(type=fn,position=args[0]) if isinstance(args[0],list) else Step(type=fn,target=args[0]))
        elif fn=='move_joints':steps.append(Step(type=fn,joints=args[0]))
        else:steps.append(Step(type=fn))
    return Task(id='script-task',name=name,steps=steps)

def validate_task(task):
    count=0
    def walk(steps,depth=0):
        nonlocal count
        if depth>5:raise ValueError('Task nesting exceeds 5')
        for s in steps:
            count+=1
            if count>500:raise ValueError('Expanded task exceeds 500 steps')
            if not s.enabled:continue
            if s.type in ('detect','move_above','condition') and not s.target:raise ValueError(f'{s.type} needs target')
            if s.type=='move_to' and not (s.position or s.target):raise ValueError('move_to needs position or target')
            if s.type=='move_joints' and not s.joints:raise ValueError('move_joints needs angles')
            if s.type=='gripper' and not s.action:raise ValueError('gripper needs action')
            if s.type in ('lower','lift') and (s.value is None or not 0<s.value<=300):raise ValueError('Lift/lower distance must be 0–300 mm')
            if s.type=='wait' and (s.value is None or not 0<=s.value<=60):raise ValueError('Wait must be 0–60 seconds')
            if s.type=='speed' and (s.value is None or not .01<=s.value<=1):raise ValueError('Speed must be 0.01–1')
            if s.type=='repeat':
                if s.value is None or not 1<=s.value<=20 or int(s.value)!=s.value:raise ValueError('Repeat count must be integer 1–20')
                for _ in range(int(s.value)):walk(s.steps,depth+1)
            elif s.type=='condition':walk(s.steps,depth+1);walk(s.otherwise,depth+1)
    walk(task.steps);return {'valid':True,'expanded_steps':count,'note':'Structure validated. Full trajectories are checked at preview and before every motion.'}
