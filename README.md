# 🎙️ Transcript Live

**Real-time transcriptie met achteraf AI Speaker Diarization**

Een webapplicatie die live audio opneemt, transcribeert en automatisch verschillende sprekers identificeert met behulp van AI.

## ✨ Features

- 🎤 **Live Audio Recording** - Neem audio op in real-time
- 📝 **Real-time Transcriptie** - Zie tekst terwijl je spreekt
- 🤖 **AI Speaker Diarization** - Automatische spreker herkenning
- 📊 **Statistieken** - Totaal sprekers, regels en woorden
- 📄 **Download Opties** - Exporteer als Word (.docx) of TXT bestand
- 🎨 **Moderne UI** - Gebruiksvriendelijke interface

## 🚀 Quick Start

### Stap 1: Download het Project

```bash
git clone https://github.com/SandrinePr/live-transcript.git
cd live-transcript
```

### Stap 2: Installeer Dependencies

**Frontend (React):**
```bash
npm install
```

**Backend (Python):**
```bash
pip install -r requirements.txt
```

### Stap 3: Start de Applicatie

**Optie A: Automatisch (Windows)**
```bash
start_backend.bat
```

**Optie B: Handmatig**

1. **Start Backend:**
```bash
python server.py
```

2. **Start Frontend (nieuwe terminal):**
```bash
npm start
```

### Stap 4: Open de App

Ga naar: **http://localhost:3000**

## 📋 Systeemvereisten

- **Node.js** (versie 14 of hoger)
- **Python** (versie 3.8 of hoger)
- **Microfoon** (voor audio opname)
- **Moderne browser** (Chrome, Firefox, Safari, Edge)

## 🎯 Hoe te Gebruiken

1. **Klik op "Start Recording"** om audio op te nemen
2. **Spreek duidelijk** - de app transcribeert live
3. **Klik op "Stop Recording"** om te stoppen
4. **Wacht op AI verwerking** - sprekers worden automatisch herkend
5. **Download resultaat** - kies tussen Word of TXT formaat

## 🔧 Technische Details

### Frontend
- **React** - Moderne web interface
- **Web Speech API** - Real-time transcriptie
- **Styled Components** - Mooie styling
- **Docx Library** - Word document generatie

### Backend
- **FastAPI** - Snelle Python API
- **librosa** - Audio feature extraction
- **scikit-learn** - AI speaker clustering
- **KMeans** - Machine learning algoritme

### AI Speaker Diarization
- **MFCC Features** - Audio karakteristieken
- **Spectral Analysis** - Frequentie analyse
- **Chroma Features** - Toonhoogte detectie
- **RMS Energy** - Volume detectie
- **KMeans Clustering** - Spreker groepering

## 📁 Project Structuur

```
live-transcript/
├── src/
│   ├── App.js          # Hoofd React component
│   └── index.js        # React entry point
├── public/
│   └── index.html      # HTML template
├── server.py           # Python backend
├── requirements.txt    # Python dependencies
├── package.json        # Node.js dependencies
└── start_backend.bat   # Windows start script
```

## 🐛 Troubleshooting

### Backend start niet
- Controleer of Python geïnstalleerd is
- Installeer dependencies: `pip install -r requirements.txt`
- Controleer of poort 3001 vrij is

### Frontend start niet
- Controleer of Node.js geïnstalleerd is
- Installeer dependencies: `npm install`
- Controleer of poort 3000 vrij is

### Geen audio opname
- Controleer microfoon permissies in browser
- Gebruik HTTPS of localhost
- Test microfoon in andere apps

### AI werkt niet
- Controleer backend logs voor errors
- Zorg dat audio langer dan 2 seconden is
- Controleer Python dependencies

## 📞 Support

Voor vragen of problemen:
- **GitHub Issues**: [Maak een issue aan](https://github.com/SandrinePr/live-transcript/issues)
- **Email**: [Je email hier]

## 📄 Licentie

Dit project is open source. Zie LICENSE bestand voor details.

---

**🎉 Veel plezier met Transcript Live!**