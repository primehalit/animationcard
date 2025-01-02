const express = require('express');
const path = require('path');
const app = express();

// Static file serving
app.use(express.static(path.join(__dirname, '')));

// Route to serve the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
