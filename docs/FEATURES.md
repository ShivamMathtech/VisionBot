# Feature coverage and explicit limits

This package is a working local prototype, not the final production product described by every item in the master brief. The table distinguishes runnable functionality from optional integrations and remaining extensions.

| Area | Included behavior | Limit / follow-up |
|---|---|---|
| Dashboard | Functional dark UI, live stream, 3D arm, joints, object table, task progress, metrics, logs, all nine navigation pages | Layout is inspired by the reference, not a pixel-identical render |
| Robot model | Standard-DH configuration, bounded FK/IK, 4–6 joint data model | Supplied model and firmware use six joints; geometry must match your arm |
| Motion | Quintic joint interpolation; numerical IK along linear TCP waypoints | Linear moves pause at waypoint boundaries; not a jerk-optimized industrial planner |
| Collision checks | Joint bounds, TCP workspace, table and sampled expanded forbidden boxes | No mesh-accurate self-collision, cable collision, force/torque, swept volume proof, or certified safety |
| Emergency stop | Task cancellation, explicit latch reset, serial ESTOP, firmware input and heartbeat watchdog | Software is not an independent power isolator; detached servos can drop a load |
| Simulation | Functional kinematic twin, objects, proximity-based pick/place, path, views, pause and speed | Simplified grasp model; no sensor noise or validated contact forces |
| PyBullet | Optional DIRECT adapter, generated matching URDF, rigid-body cubes | Not available/tested in the build container; arm is kinematic; install locally |
| Camera | Virtual frames, USB index, images/videos, URL/RTSP via OpenCV, recording and snapshots | Real USB/RTSP sources were unavailable for testing; codecs depend on OS |
| Detection | Real HSV segmentation in demo and optional CPU YOLO adapter | No weights bundled; YOLO adapter not inference-tested here |
| Tracking | Class-aware nearest-centroid association, TTL, velocity and persistent IDs | Not ByteTrack/BoT-SORT; crossing/occlusion can swap IDs |
| Calibration | Planar homography, point picker, fit residual, profile save/load, ArUco DICT_4X4_50 corners | No full intrinsic/extrinsic workflow, AprilTags, depth sensor or automatic marker-to-robot solve |
| Visual task builder | Add/reorder/duplicate/disable/delete blocks, import/export, save/load | Nested conditions/repeats are edited in Task JSON, not a nested node graph |
| Scripts | Monaco, safe AST literal-call DSL | Restricted syntax, not general Python; no variables or operating-system access |
| Natural language | Local deterministic parser for three colored-cube pick/place requests | Not an LLM or unrestricted natural-language interpreter |
| Task execution | Full preplanning, trajectory checks, live progress, cancel, SQLite reports | Targets are captured at planning time; no dynamic obstacle replanning |
| History/replay | JSON report, joint/TCP recording, simulation-only safe motion replay | Replay preserves sampled motion, not exact original timing or gripper events |
| Arduino | Port scan, JSON commands/ACKs, heartbeat, watchdog, interlock, physical enable confirmation | Mock transport tested; physical firmware compile and arm validation not performed |
| Feedback | Commanded pose, requested joints and firmware-generated servo command telemetry | No encoders; cannot claim actual joint or Cartesian error |
| Performance | FPS, processing latency, CPU/RAM, recorded task outcomes and durations | No invented detection accuracy or measured hardware precision |
| Storage | SQLite tasks, calibration profiles, reports and structured logs | Single local user; no account management/PostgreSQL migration layer |
| Deployment | Windows/Linux launcher, prebuilt UI, Docker configuration | No cloud deployment; Docker not run here; authentication not implemented |

A color-detector “score” is contour area divided by bounding-box area. It is not calibrated object-detection confidence or accuracy. YOLO mode shows the model's confidence, which still is not evaluation accuracy.

A saved calibration's fit RMSE measures the fitted points. Validate separate held-out physical points before enabling camera-driven hardware tasks.
