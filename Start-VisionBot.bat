@echo off
setlocal
cd /d "%~dp0"
if not exist ".venv\Scripts\python.exe" (
  echo First run: creating Python 3.11 environment...
  py -3.11 -m venv .venv
  if errorlevel 1 (
    echo Python 3.11 was not found. Install Python 3.11, then run this file again.
    echo Or create .venv manually using Python 3.12 as documented in README.md.
    pause
    exit /b 1
  )
)
if not exist ".venv\visionbot-installed" (
  ".venv\Scripts\python.exe" -m pip install --upgrade pip
  ".venv\Scripts\python.exe" -m pip install -r backend\requirements.txt
  if errorlevel 1 (
    echo Dependency installation failed. See the error above and docs\TROUBLESHOOTING.md.
    pause
    exit /b 1
  )
  type nul > ".venv\visionbot-installed"
)
".venv\Scripts\python.exe" scripts\run.py
if errorlevel 1 pause
