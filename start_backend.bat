@echo off
echo ========================================
echo AI Speaker Diarization Backend Server
echo ========================================
echo.
echo Gebruikt pyAudioAnalysis (betrouwbaarder dan pyannote.audio)
echo.
echo Controleer Python installatie...
python --version
if %errorlevel% neq 0 (
    echo ❌ Python is niet geïnstalleerd!
    echo Download Python van: https://python.org
    pause
    exit /b 1
)
echo.
echo Controleer pip installatie...
pip --version
if %errorlevel% neq 0 (
    echo ❌ pip is niet geïnstalleerd!
    pause
    exit /b 1
)
echo.
echo Installeer dependencies (pyAudioAnalysis)...
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo ❌ Fout bij installeren van dependencies!
    echo.
    echo Probeer handmatig:
    echo pip install pyAudioAnalysis
    echo pip install fastapi uvicorn
    pause
    exit /b 1
)
echo.
echo ✅ Dependencies geïnstalleerd!
echo.
echo Start backend server...
echo Server draait op: http://localhost:3001
echo.
echo Druk Ctrl+C om te stoppen
echo.
python server.py
pause
