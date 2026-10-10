"""Cross-platform launcher. Uses prebuilt frontend; Node is unnecessary for normal use."""
from pathlib import Path
import os,sys,threading,time,webbrowser
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'backend'));os.chdir(ROOT)
if not (ROOT/'frontend/dist/index.html').is_file():
    raise SystemExit('Frontend build missing. Run: cd frontend && npm ci && npm run build')
try:import uvicorn
except ImportError:raise SystemExit('Install backend requirements first. See README.md.')
if '--no-browser' not in sys.argv:
    def open_browser():time.sleep(1.5);webbrowser.open('http://127.0.0.1:8000')
    threading.Thread(target=open_browser,daemon=True).start()
uvicorn.run('app.main:app',host='127.0.0.1',port=8000,log_level='info')
