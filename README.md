# VisionBot
## AI robotic arm control • Computer vision • Simulation workspace

A runnable local robotics prototype based on the supplied VisionBot dashboard and development brief. The ZIP includes the complete source **and a built frontend**, so normal startup requires Python only, not Node.js. It runs without a camera, Arduino, GPU, model weights, API key, or internet after dependencies are installed.

**Start with simulation.** This is a tested working model, not a certified or production-ready industrial robot controller. Physical Arduino operation, servo mappings, optional YOLO weights, and optional PyBullet integration must be validated on your machine. See `docs/FEATURES.md` for scope and limits.

## Quick start — Windows

1. Extract the ZIP into a writable folder, for example `F:\projects\VisionBot` (do not run inside the ZIP).
2. Install **64-bit Python 3.11** with the Python launcher. Python 3.12 also works for the default demo; Python 3.11 is preferred for optional robotics packages. Avoid Python 3.14 for this project.
3. Double-click **`Start-VisionBot.bat`**. First run creates `.venv` and installs dependencies; internet is needed for this installation.
4. Your browser opens **http://127.0.0.1:8000**. Keep the terminal open.
5. Select **Start task** to run the red-cube pick-and-place demonstration. It takes about 44 seconds at 1×; select 5× in the simulation toolbar for a faster demo.
6. Use Stop to interrupt a task, or Emergency Stop to latch motion disabled. Explicitly reset the latch before starting again.

The screen labels the input as a **virtual camera** and the detector as **HSV color detection**. That demo detects pixels from a rendered workspace; it does not pretend to run YOLO.

### Manual Windows setup (PowerShell)

Run these commands from the extracted `visionbot` folder:

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade pip
.\.venv\Scripts\python.exe -m pip install -r backend\requirements.txt
.\.venv\Scripts\python.exe scripts\run.py
```

If you have Python 3.12 instead, replace `py -3.11` with `py -3.12`. No PowerShell activation or execution-policy change is necessary.

### Linux/macOS

```bash
bash start.sh
```

Or manually:

```bash
python3 -m venv .venv
.venv/bin/python -m pip install -r backend/requirements.txt
.venv/bin/python scripts/run.py
```

Server: http://127.0.0.1:8000 • Swagger API: http://127.0.0.1:8000/docs

## What you can use

- Dark responsive dashboard with a live processed camera stream and interactive Three.js robot visualization.
- Configurable standard-DH 4–6 joint mathematics; supplied six-joint example. FK, bounded numerical IK, joint-space quintic trajectories, and waypoint-based linear TCP movement.
- Joint, workspace, table and forbidden-zone checks before motion, plus a latched emergency stop.
- Virtual camera, USB cameras, uploaded images/videos, and OpenCV-supported IP/RTSP streams.
- CPU color segmentation, persistent centroid IDs, velocities, class/score filters in the API, and optional configurable YOLO inference.
- Planar homography calibration with point picking, profile save/load, and ArUco corner detection.
- Reorderable visual tasks; duplicate, disable, edit, import/export, save/load/delete; conditional and repeat blocks configurable in Task JSON.
- Locally bundled Monaco editor for a restricted function-call DSL; no Python `exec` or shell execution.
- Offline natural-language template: `Pick the blue cube and place it in the yellow box.` Generates a reviewable plan; does not move the robot.
- Preview path, run/stop, simulation pause, speed control, gripper actions, and simulated pick-and-place.
- SQLite tasks/calibration/logs/run history, JPEG snapshots, AVI recording, JSON reports and CSV log export.
- Simulation-only motion replay from saved runs, with new safety-checked trajectories.
- Serial port discovery, acknowledged commands, heartbeat, disconnect handling, physical-mode confirmation, and Arduino Mega firmware.

## First demonstration

1. The virtual camera shows three colored blocks and a yellow drop zone.
2. Open Task Builder; inspect `Pick and place red cube`.
3. Click **Validate**, then **Preview path**. The gold path is the preview; cyan is executed TCP history.
4. Run the task. A complete path is planned and checked before execution.
5. The gripper picks the red cube through the demo attachment model and releases it at the drop zone.
6. Open Performance to download the run report or replay its motion.
7. Reset the simulation before repeating a fresh object task.

## Optional integrations

### YOLO

```powershell
.\.venv\Scripts\python.exe -m pip install -r backend\requirements-yolo.txt
```

Place your trusted weights at `models/detector.pt`. Select **Computer Vision → YOLO**, enter the model path, and start the camera. Standard pretrained COCO models do not identify colored cubes by those custom class names. See `models/README.md`.

### PyBullet

```powershell
.\.venv\Scripts\python.exe -m pip install -r backend\requirements-physics.txt
```

Restart the backend. If importable, PyBullet runs in DIRECT mode with a generated URDF and dynamic cubes. The default fallback is a functional kinematic world with proximity-based grasp attachment. PyBullet is optional because wheels/build support varies by Python/platform. The arm is driven kinematically in both engines; this is not a torque-controller or force-contact validation model.

### Arduino

Read **`docs/HARDWARE.md`** before connecting motors. Firmware defaults to `COMMISSIONED = false`; ARM is rejected until you calibrate it. No physical arm is assumed or required.

## Source development

Python backend, React/TypeScript frontend, Vite, Three.js, Monaco, FastAPI, OpenCV, NumPy/SciPy and SQLite.

Backend (root folder):

```powershell
.\.venv\Scripts\python.exe -m uvicorn app.main:app --app-dir backend --reload --host 127.0.0.1 --port 8000
```

Frontend (another terminal; Node.js 22 LTS or compatible required):

```powershell
cd frontend
npm ci
npm run dev
```

Open http://127.0.0.1:5173. Vite proxies `/api` and `/ws` to the backend. Build after source edits:

```powershell
cd frontend
npm run build
```

Stop and restart the normal Python launcher to serve the updated `frontend/dist`.

## Tests

```powershell
.\.venv\Scripts\python.exe -m pip install pytest httpx
.\.venv\Scripts\python.exe -m pytest tests -q
```

See `docs/TEST_REPORT.md` for actual checks performed and integrations not tested. Optional browser tests live in `tests/ui-smoke.cjs` and need Playwright plus Chromium.

## Configuration and data

- `configs/robot.yaml`: DH geometry, home pose, angle/velocity/acceleration limits, workspace, link radius and forbidden boxes.
- `configs/config.yaml`: startup camera, detector and simulation settings.
- `data/visionbot.db`: persistent task/calibration/run/log database.
- `data/`: uploaded media, snapshots, recordings. Delete only when no longer needed.
- `VISIONBOT_DATA_DIR`: optional environment variable overriding the writable data folder.
- `.env.example` documents the variable; set it in your shell (the launcher does not automatically load `.env`).

Units are **millimetres, degrees, seconds**; PyBullet receives metres/radians internally. Camera processing coordinates are **640×480 pixels**. Planar calibration is valid only on its measured plane; object height is a supplied Z value, not depth estimated from one image.

## Project layout

```text
visionbot/
  backend/app/           API, mathematics, CV, controllers, task engine, storage
  frontend/src/          React dashboard, Three.js view, task builder, Monaco
  frontend/dist/         Built UI for immediate use without Node
  configs/               Editable robot and startup configuration
  simulation/robots/     Generated standard-DH URDF
  firmware/              Arduino Mega sketch
  models/                Add your own trained YOLO weights
  examples/              Example JSON task and restricted task script
  tests/                 Unit, integration, mock serial and browser smoke tests
  docs/                  Hardware, architecture, features, test and troubleshooting guides
  scripts/run.py         Single-process local launcher
  Start-VisionBot.bat    Windows first-run setup and launch
  start.sh               Linux/macOS first-run setup and launch
  docker-compose.yml     Optional local simulation container
```

## Docker (optional)

```bash
docker compose up --build
```

Open http://127.0.0.1:8000. SQLite resides in a named volume; it does not need a separate database service. Docker is for simulation by default; USB serial/camera passthrough varies by host. Native Windows startup is the recommended path. Docker configuration is included but was not executed in this build environment.

## Security and limits

Bind to localhost; this prototype has no login or multi-user authorization. Do not publish the robot control API directly. Task scripts accept only whitelisted literal function calls. Physical operation needs real calibration, independent emergency power isolation, calibrated limits, and commissioning. Accuracy, physical position error, and hardware success claims are not fabricated: unavailable metrics remain unavailable.
