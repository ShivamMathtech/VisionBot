# Troubleshooting

## Windows Python installation failures

Use Python 3.11 x64 or 3.12 x64. If pip starts building NumPy, SciPy, OpenCV or PyBullet from source, first verify you are not using Python 3.14 or a 32-bit interpreter. Delete only this project's `.venv`, recreate it with `py -3.11 -m venv .venv`, upgrade pip, then reinstall. The launcher uses `.venv\Scripts\python.exe` directly, so PowerShell script activation policy is irrelevant.

## Blank/loading dashboard

Keep the backend terminal running. Open `http://127.0.0.1:8000/api/system/status`. If unavailable, read the terminal error. Port 8000 may already be occupied by another app. Stop that app or change the launcher port and trusted origins consistently. Access the UI over HTTP through FastAPI; do not double-click `frontend/dist/index.html` as a file URL.

## “No serial ports found”

Install the board's USB driver, use a data-capable cable, close Arduino Serial Monitor and other programs holding the port, then scan again. COM ports only appear when the computer can enumerate the device. Simulation works without any port.

## Firmware rejects ARM

Check the physical normally-closed interlock, latched emergency state, and `COMMISSIONED` flag. Read HARDWARE.md. Do not set the flag merely to clear the message; calibrate your mechanism first.

## Camera offline or frozen

USB camera indices depend on the host. Close other camera apps. Try `0`, then `1`. For an IP camera, verify its URL/network reachability outside VisionBot. Network opening/reading has bounded OpenCV timeouts, but behavior depends on the OpenCV backend. Stop/restart the camera after a source failure. The application keeps the latest frame only; an offline camera can show its last frame with an offline/error badge.

## YOLO model missing / missing ultralytics

Install `backend/requirements-yolo.txt` and supply a trusted compatible weight file. No model is silently downloaded by the application. Generic COCO weights do not contain colored-cube classes. Return to color mode to run the included demo immediately.

## PyBullet install fails

PyBullet is optional; continue with the built-in kinematic simulator. It is not part of the default requirements to avoid blocking first run on a compiler/platform mismatch. Python 3.11 often has broader wheel support. Source builds require a working C++ toolchain and can be slow.

## Calibration / unreachable target

Camera points are always in the processed 640×480 coordinate system. Use at least four non-collinear points with matching measured robot XY values. Calibration changes when the camera moves, image crop changes, or source changes. Object Z is configured, not inferred. Check mm versus metres, DH parameters, joint limits and the workspace. A calibration that fits its own four points still needs independent validation.

## Task fails after a previous pick-and-place

Reset the simulation world before repeating the initial object demo. Objects can overlap in the target zone and segmentation can merge contours. Use distinct positions/colors for additional experiments. Centroid tracking can lose identity under occlusion.

## Emergency stop remains active

Wait for the current worker to stop, then click Reset emergency latch. Physical hardware also requires its interlock closed and a fresh explicit hardware enable. Motion never resumes automatically.

## “Robot busy”

Wait for completion or click Stop. Manual joint/TCP commands, calibration changes and simulation reset are blocked during a running task. A new command is not queued behind stale movement.

## Slow CPU / browser

Select CPU Saver on Computer Vision and restart the camera. Use a small YOLO model. The editor is lazy-loaded; its first open may take a moment. A WebGL-capable browser is needed for the 3D panel. npm build warnings about large Three.js/Monaco chunks are non-fatal.

## npm errors from copied dependencies

`node_modules` is intentionally excluded from the ZIP. Run `npm ci` in `frontend`; this installs native dependencies for your OS. Do not copy Linux `node_modules` onto Windows. The prebuilt frontend can be used immediately without npm.
