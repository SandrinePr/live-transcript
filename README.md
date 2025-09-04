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

## 🔄 Hoe het Werkt

### **Fase 1: Live Opname & Transcriptie**
- 🎤 **Audio Opname**: Je microfoon neemt real-time audio op
- 📝 **Live Transcriptie**: Web Speech API zet spraak direct om naar tekst
- 👁️ **Real-time Weergave**: Je ziet de tekst verschijnen terwijl je spreekt
- ⏱️ **Timestamps**: Elke tekstregel krijgt een tijdstempel

### **Fase 2: AI Speaker Diarization (Na Opname)**
- 🎵 **Audio Analyse**: De opgenomen audio wordt geanalyseerd door AI
- 🧠 **Feature Extraction**: AI extraheert audio kenmerken (MFCCs, frequenties, volume)
- 👥 **Spreker Detectie**: KMeans algoritme groepeert audio segmenten per spreker
- 🎨 **Kleurcodering**: Elke spreker krijgt een unieke kleur in de interface
- 📊 **Statistieken**: Totaal aantal sprekers, regels en woorden worden berekend

### **Fase 3: Resultaat & Export**
- 📄 **Geformatteerde Transcript**: Tekst wordt gegroepeerd per spreker
- 💾 **Download Opties**: Exporteer als professioneel Word document of TXT bestand
- 📈 **Statistieken**: Volledige rapportage met datum, tijd en metrics

### **Voorbeeld Workflow:**
```
1. Start Recording → "Hallo, dit is Jan"
2. Live Transcript → "Hallo, dit is Jan" (verschijnt direct)
3. Stop Recording → Audio wordt opgeslagen
4. AI Processing → Analyseert wie "Jan" is vs andere sprekers
5. Resultaat → "Persoon 1: Hallo, dit is Jan"
6. Download → Professioneel rapport met alle sprekers
```

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
├── __pycache__/        # Python cache (automatisch gegenereerd)
├── node_modules/       # Node.js dependencies (automatisch gegenereerd)
├── server.py           # Python backend
├── requirements.txt    # Python dependencies
├── package.json        # Node.js dependencies
├── package-lock.json   # Node.js lock file
├── start_backend.bat   # Windows start script
├── .gitignore          # Git ignore regels
├── README.md           # Project documentatie
└── BACKEND_README.md   # Backend specifieke documentatie
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