# AI Speaker Diarization Backend Server

Deze backend server gebruikt **pyannote.audio** voor echte AI speaker herkenning.

## 🚀 Snelle Start

### 1. Python Installeren
- Download Python 3.8+ van [python.org](https://python.org)
- Zorg dat "Add Python to PATH" is aangevinkt

### 2. Backend Starten
```bash
# Windows
start_backend.bat

# Of handmatig
pip install -r requirements.txt
python server.py
```

### 3. Server Testen
- Backend draait op: http://localhost:3001
- Health check: http://localhost:3001/health
- API docs: http://localhost:3001/docs

## 📁 Bestanden

- `server.py` - Python FastAPI backend server
- `requirements.txt` - Python dependencies
- `start_backend.bat` - Windows start script

## 🔧 Hoe Het Werkt

### 1. Audio Verwerking
```
Frontend → Base64 Audio → Backend → WAV Conversie → AI Model
```

### 2. AI Speaker Diarization
```
pyannote.audio → Speaker Segments → Frontend → UI Resultaten
```

### 3. Fallback Systeem
```
Als AI faalt → Simulatie → Frontend → UI Resultaten
```

## 📊 API Endpoints

### POST /api/speaker-diarization
**Request:**
```json
{
  "audioData": "base64_encoded_audio_string",
  "parameters": {
    "min_speakers": 1,
    "max_speakers": 5
  }
}
```

**Response:**
```json
{
  "segments": [
    {
      "start": 0.0,
      "end": 5.0,
      "speaker": "SPEAKER_01",
      "confidence": 0.9
    }
  ],
  "total_speakers": 2,
  "audio_duration": 30.0,
  "processing_time": 2.5
}
```

## ⚠️ Belangrijke Notities

### 1. Eerste Keer Starten
- **Model download** kan 1-2GB zijn
- **Download tijd** kan 5-15 minuten duren
- **Internet verbinding** vereist voor eerste keer

### 2. Systeem Vereisten
- **Python 3.8+** vereist
- **4GB+ RAM** aanbevolen
- **GPU** optioneel (versnelt verwerking)

### 3. Mogelijke Problemen
- **pyannote.audio installatie** kan falen op Windows
- **Audio dependencies** kunnen problemen geven
- **Model loading** kan timeouts geven

## 🔍 Troubleshooting

### 1. "pyannote.audio niet geïnstalleerd"
```bash
pip install pyannote.audio
# Of
conda install -c conda-forge pyannote.audio
```

### 2. "Model download failed"
- Controleer internet verbinding
- Probeer opnieuw (model wordt gecached)
- Controleer disk ruimte (2GB+ nodig)

### 3. "Audio conversion failed"
- Controleer audio formaat
- Zorg dat audio niet te groot is
- Controleer base64 encoding

## 🎯 Volgende Stappen

1. **Start backend** met `start_backend.bat`
2. **Wacht op model download** (eerste keer)
3. **Test frontend** met opname maken
4. **Controleer console** voor AI verwerking
5. **Geniet van echte AI resultaten!** 🎉

## 📞 Support

Als er problemen zijn:
1. Controleer console output
2. Controleer Python versie (3.8+)
3. Controleer internet verbinding
4. Probeer dependencies opnieuw installeren

**Succes met de echte AI Speaker Diarization!** 🚀✨
