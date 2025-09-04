# 🎤 Transcript Live Dashboard

Een moderne React applicatie voor live transcriptie van gesprekken met een gebruiksvriendelijke interface.

## ✨ Functies

- **Live Opname**: Start en stop audio-opnames met één klik
- **Real-time Transcriptie**: Zie direct wat er wordt gezegd (momenteel gesimuleerd)
- **Pauzeren/Hervatten**: Controleer de opname wanneer gewenst
- **Statistieken**: Bijhouden van opnametijd, woorden en zinnen
- **Download Transcript**: Sla transcripties op als tekstbestand
- **Moderne UI**: Mooie, responsive interface met gradient design

## 🚀 Installatie

1. **Installeer dependencies:**
   ```bash
   npm install
   ```

2. **Start de development server:**
   ```bash
   npm start
   ```

3. **Open je browser:**
   De app opent automatisch op `http://localhost:3000`

## 🎯 Gebruik

### Basis Gebruik
1. **Start Opname**: Klik op de groene "Start Opname" knop
2. **Geef microfoon-toegang**: Je browser vraagt om toegang tot je microfoon
3. **Begin met praten**: De transcriptie verschijnt live in het tekstvak
4. **Stop Opname**: Klik op de rode "Stop Opname" knop

### Extra Functies
- **Pauzeren**: Gebruik de pauze-knop om de opname tijdelijk te stoppen
- **Download**: Sla je transcript op als .txt bestand
- **Statistieken**: Bekijk opnametijd, aantal woorden en zinnen

## 🏗️ Project Structuur

```
transcript-live-dashboard/
├── public/
│   └── index.html          # Hoofd HTML bestand
├── src/
│   ├── App.js              # Hoofd React component
│   └── index.js            # App entry point
├── package.json            # Dependencies en scripts
└── README.md               # Deze documentatie
```

## 🔧 Technische Details

### Frontend
- **React 18** - Moderne React met hooks
- **Styled Components** - CSS-in-JS styling
- **Lucide React** - Moderne iconen
- **Responsive Design** - Werkt op alle schermformaten

### Audio Opname
- **MediaRecorder API** - Browser-native audio opname
- **Real-time Processing** - Audio wordt direct verwerkt
- **Microfoon Toegang** - Vraagt om microfoon permissies

### Transcriptie (Momenteel Gesimuleerd)
- **Demo Modus**: Toont voorbeeldtekst elke 3 seconden
- **Real-time Updates**: Tekst verschijnt direct tijdens opname
- **Voorbereid voor Integratie**: Klaar voor echte speech-to-text

## 🚧 Toekomstige Uitbreidingen

- **Echte Speech-to-Text**: Integratie met Whisper of andere STT services
- **Sprekerherkenning**: Identificeer verschillende sprekers
- **Audio Opslag**: Sla opgenomen audio op voor latere verwerking
- **Export Opties**: PDF, Word, of andere formaten
- **Cloud Opslag**: Synchroniseer transcripties tussen apparaten

## 🎨 UI/UX Features

- **Gradient Design**: Moderne kleurenschema's
- **Smooth Animations**: Hover effecten en transitions
- **Status Indicators**: Duidelijke feedback over opnamestatus
- **Responsive Layout**: Werkt perfect op desktop en mobiel
- **Accessibility**: Goede contrast en leesbaarheid

## 🐛 Bekende Limitaties

- **Transcriptie is Gesimuleerd**: Momenteel geen echte speech-to-text
- **Browser Compatibiliteit**: Vereist moderne browser met MediaRecorder support
- **Microfoon Vereist**: App werkt alleen met microfoon-toegang

## 📱 Browser Ondersteuning

- ✅ Chrome 66+
- ✅ Firefox 60+
- ✅ Safari 14.1+
- ✅ Edge 79+

## 🤝 Bijdragen

Dit is een demo project. Voor productie gebruik wordt aanbevolen om:
- Echte speech-to-text integratie toe te voegen
- Error handling te verbeteren
- Unit tests toe te voegen
- Performance te optimaliseren

## 📄 Licentie

Dit project is open source en beschikbaar onder de MIT licentie.

---

**Gemaakt met ❤️ voor live transcriptie doeleinden**
