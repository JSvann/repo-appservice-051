const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Praktikum Azure App Service</h1><p>Aplikasi berjalan.</p>');
});

app.get('/status', (req, res) => {
  res.json({ status: 'running', service: 'Azure App Service', timestamp: new Date() });
});

app.get('/profil', (req, res) => {
  res.json({ matakuliah: 'Komputasi Awan', topik: 'Serverless Azure' });
});

app.get('/waktu', (req, res) => {
    const waktuSekarang = new Date();
    res.json({
        status: "success",
        serverTime: waktuSekarang.toLocaleTimeString('id-ID'),
        serverDate: waktuSekarang.toLocaleDateString('id-ID'),
        timezone: "UTC/GMT (Azure Server Time)"
    });
});

app.listen(port, () => console.log(`Server berjalan pada port ${port}`));
