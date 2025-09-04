const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Hugging Face API proxy endpoint
app.post('/api/speaker-diarization', async (req, res) => {
  try {
    const { audioData, parameters } = req.body;
    
    console.log('Received speaker diarization request');
    console.log('Audio data length:', audioData ? audioData.length : 'undefined');
    console.log('Parameters:', parameters);
    
    if (!audioData) {
      return res.status(400).json({ error: 'No audio data provided' });
    }
    
    // Call Hugging Face API
    const response = await fetch('https://api-inference.huggingface.co/models/pyannote/speaker-diarization-3.1', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer YOUR_HUGGINGFACE_TOKEN_HERE',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: audioData,
        parameters: parameters || { min_speakers: 1, max_speakers: 5 }
      })
    });
    
    console.log('Hugging Face API response status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hugging Face API error:', errorText);
      return res.status(response.status).json({ 
        error: `Hugging Face API error: ${response.status}`,
        details: errorText
      });
    }
    
    const result = await response.json();
    console.log('Hugging Face API success, result keys:', Object.keys(result));
    
    res.json(result);
    
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Speaker Diarization proxy server is running' });
});

// Lokale pyannote.audio endpoint met echte verwerking via Python script
app.post('/api/local-speaker-diarization', async (req, res) => {
  try {
    const { audio, transcript } = req.body;
    
    console.log('Received local pyannote.audio request');
    console.log('Audio data length:', audio ? audio.length : 'undefined');
    console.log('Transcript length:', transcript ? transcript.length : 'undefined');
    
    if (!audio || !transcript) {
      return res.status(400).json({ error: 'Audio and transcript data required' });
    }
    
    console.log('🚀 Starting real local pyannote.audio processing via Python...');
    
    // Import child_process voor het aanroepen van Python script
    const { spawn } = require('child_process');
    
    // Maak input data voor Python script
    const inputData = JSON.stringify({ audio, transcript });
    
    // Start Python script
    const pythonProcess = spawn('python', ['local_pyannote.py']);
    
    // Stuur data naar Python script
    pythonProcess.stdin.write(inputData);
    pythonProcess.stdin.end();
    
    // Verzamel output van Python script
    let outputData = '';
    let errorData = '';
    
    pythonProcess.stdout.on('data', (data) => {
      outputData += data.toString();
    });
    
    pythonProcess.stderr.on('data', (data) => {
      errorData += data.toString();
    });
    
    // Wacht op resultaat
    const result = await new Promise((resolve, reject) => {
      pythonProcess.on('close', (code) => {
        if (code === 0) {
          try {
            const parsedResult = JSON.parse(outputData);
            resolve(parsedResult);
          } catch (parseError) {
            reject(new Error(`Failed to parse Python output: ${parseError.message}`));
          }
        } else {
          reject(new Error(`Python script failed with code ${code}: ${errorData}`));
        }
      });
    });
    
    console.log('✅ Local pyannote.audio processing completed');
    console.log('Result:', result);
    
    res.json(result);
    
  } catch (error) {
    console.error('Local pyannote.audio error:', error);
    res.status(500).json({ 
      error: 'Local pyannote.audio error', 
      details: error.message,
      note: 'Check if Python script and pyannote.audio are properly installed'
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Speaker Diarization proxy server running on port ${PORT}`);
  console.log(`📡 Proxy endpoint: http://localhost:${PORT}/api/speaker-diarization`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
});

