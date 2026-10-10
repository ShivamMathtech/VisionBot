# Architecture and units

The frontend and backend are separate source trees. Normal launch serves the compiled UI from FastAPI, simplifying installation and keeping REST/WebSocket traffic same-origin.

## Runtime flow

1. One camera thread captures and resizes a frame to 640×480.
2. HSV or optional YOLO produces class, bbox, score and center.
3. Centroid tracker associates IDs and estimates velocity.
4. Active planar homography maps centers to robot XY, with configured object-center Z.
5. Task compiler expands repeats/conditions, resolves current objects, computes IK and plans every motion.
6. Each quintic sample passes the safety validator before execution begins.
7. One execution worker sends samples through `RobotController` to either simulation or Arduino.
8. WebSocket telemetry publishes snapshots at 5 Hz. MJPEG provides a latest-frame camera view.
9. SQLite saves tasks, profiles, logs and bounded-size run samples.

CPU-heavy compilation and synchronous API handlers run in FastAPI's thread pool. Camera work is on its own daemon worker. The task worker uses a cancellation event with short waits; emergency stop does not wait for an entire trajectory. Serial commands have IDs and acknowledgement deadlines. A separate heartbeat worker keeps the firmware alive.

## Mathematics

Standard DH transform for each revolute joint:

`T = RotZ(q + offset) · TransZ(d) · TransX(a) · RotX(alpha)`

Length units in application code/configuration are millimetres; joint units are degrees. PyBullet and URDF use metres and radians. Frontend Three.js maps robot `(x,y,z)` to view `(x,z,-y)` for a Y-up view.

IK minimizes Cartesian error with joint bounds using SciPy least-squares. Optional requested orientation adds a weighted rotation-vector residual. The fallback seed list is deterministic. An unreachable target raises a clear validation error. Position-only IK is redundant for this example; it may find a different elbow/wrist configuration than a human expects.

Quintic interpolation is `s(u)=10u³−15u⁴+6u⁵`. Duration satisfies the analytical maximum normalized velocity `1.875` and acceleration `10/sqrt(3)` for each joint's configured bounds. Planning at 40 ms intervals then validates poses. Linear TCP motion solves IK at approximately 8 mm waypoint spacing and plans safe joint segments between them.

Table/forbidden-box checks sample each non-base link centerline every ~5 mm and expand forbidden boxes by the configured link radius. This is a conservative simplified obstacle model, not certified continuous collision detection.

## Task grammar

Supported DSL calls:

```python
task("Example")
detect("red_cube")
move_above("red_cube")
move_to([210, -90, 160])
move_joints([0, 55, -95, 40, 0, 0])
lower(65)
close_gripper()
lift(65)
open_gripper()
wait(1)
speed(0.3)
capture()
home()
```

Only direct named calls with literal arguments are allowed. `task` sets the name. Assignments, imports, attributes, loops, comprehensions, shell calls and arbitrary function invocation are rejected. The visual/JSON schema additionally supports bounded `repeat` and detection-presence `condition` with `steps`/`otherwise`. Conditions are resolved against the detection snapshot during planning.

## API

Explore the authoritative generated schema at `/docs` or `/openapi.json`.

- `/api/system/status`, `/api/robot/status`: state snapshots.
- `/api/camera/start`, `/stop`, `/status`, `/stream`, `/frame`, `/upload`, `/snapshot`, `/record/start`, `/record/stop`.
- `/api/calibration`: fit/save/list; `/{name}/load`; `/markers` for ArUco.
- `/api/robot/joints`, `/tcp`, `/home`, `/stop`, `/emergency-stop`, `/reset-stop`, `/mode`, `/gripper/{action}`.
- `/api/hardware/ports`, `/api/robot/connect`, `/disconnect`.
- `/api/tasks`: CRUD; `/{id}/validate`, `/preview`, `/simulate`, `/execute`.
- `/api/tasks/parse/script` and `/parse/natural` create reviewable plans.
- `/api/simulation/reset`, `/speed`, `/pause`.
- `/api/kinematics/fk`, `/ik`, `/api/config`.
- `/api/performance`, `/api/logs`, `/api/logs/export`, `/api/runs`, `/api/runs/{id}`, `/{id}/replay`.
- `/ws/telemetry`, `/ws/detections`, `/ws/robot`, `/ws/task`, `/ws/logs`.

Schema validation errors return 422; operational validation failures return 400 with a human-readable `detail`. Missing stored records return 404. API and WebSocket origins are restricted to local development/launcher addresses; this is not an authentication system.
