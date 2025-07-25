// server.js

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the root directory
app.use(express.static(__dirname));

// For SPA routing: fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Rhys Coin server running on port ${PORT}`);
});