const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("🚀 Drighna Platform API Running");
});

app.get('/health', (req, res) => {
    res.json({ platform: "Drighna", status: "OK" });
});

app.listen(PORT, () => {
    console.log(`Drighna server running on port ${PORT}`);
});