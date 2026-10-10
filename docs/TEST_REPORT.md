# Validation report

## Executed successfully

Environment: Linux, Python 3.12.14, Node.js 24.19.0. Exact Python packages used are recorded in `backend/tested-environment.txt`; that file is a diagnostic snapshot, not a cross-platform installation requirements file.

### Backend: 24 tests passed

Command: `python -m pytest tests -q`

Covered:

- Forward/inverse kinematics round-trip and joint bounds.
- Unreachable targets, NaN input and forbidden-zone rejection.
- Numerically checked velocity/acceleration limits for quintic trajectories.
- Homography mapping and rejection of collinear calibration points.
- Tracker ID persistence, velocity and expiry.
- DSL compilation and rejection of imports, arbitrary calls, assignments and loops.
- Supported natural-language plan generation; rejection of unsupported instructions.
- Expanded-task repeat limits.
- Full virtual-camera → detection → homography → IK → trajectory → simulated pick/place pipeline.
- Cube arrival at the target, task completion, saved report and sampled trajectory.
- Emergency-stop cancellation, frozen pose after stop, blocked commands and explicit reset.
- Physical-mode confirmation gate, invalid commands and cross-origin mutation rejection.
- Task create/update/read/delete and WebSocket telemetry.
- Missing-model error recovery and calibration persistence.
- Image upload, color detection on uploaded pixels, snapshot download and AVI recording.
- Pause and cancel while a robot worker is running.
- Mock Arduino controller command sequence and acknowledgement timeout fault handling.

One dependency warning: the installed Starlette version deprecates its current `httpx` TestClient transport. The tests still pass. Production operation does not use TestClient.

### Frontend

- TypeScript compilation: passed.
- Vite production build: passed; bundled Three.js and lazy Monaco produce non-fatal large-chunk warnings.
- The compiled UI is included at `frontend/dist`.
- Backend launch reached Uvicorn ready state and served the application.

### Browser smoke test: passed

Playwright 1.51.1 with Chromium 134 headless:

- Dashboard loads and the processed camera image reports a 640px natural width.
- Task preview produces a trajectory.
- Natural-language input generates the blue-cube task.
- Locally bundled Monaco loads and the restricted script compiles to a task.
- All nine navigation pages render.
- Emergency-stop latch appears and explicit reset restores simulation readiness.
- No uncaught JavaScript errors during the workflow.
- At a 390×844 viewport, no document-level horizontal overflow.

The full-page dashboard was also visually inspected. The camera was adjusted to show the full frame and the 3D camera brought closer to the robot after that review. `docs/dashboard-preview.png` shows the packaged interface.

To reproduce browser testing, start the server, install Playwright and Chromium in a development environment, and run `node tests/ui-smoke.cjs`. These are development-only tools and not needed for normal startup.

## Not validated here

- Windows/macOS execution (Windows launcher and instructions are included).
- Physical Arduino compilation/flashing, servo motion, real encoders or a physical emergency-stop circuit.
- Real USB/RTSP devices and third-party video codecs.
- YOLO inference (no model weights provided).
- Optional PyBullet integration: installation required a C++ build unavailable in the initial environment. The tested simulation is the built-in kinematic engine.
- Docker execution, load testing, multi-user security, industrial safety or physical collision certification.

No fabricated model accuracy or physical position-error figures are included.
