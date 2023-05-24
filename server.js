const express = require('express');
const http = require('http')

const app = express();
const server = http.createServer(app)
const port = process.env.PORT || 3000;

app.use(express.static("dist"))

// Menangani rute dan respons server
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

// Menjalankan server Express.js
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
