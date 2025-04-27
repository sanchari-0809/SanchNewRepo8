const http = require('http');

const PORT = 3000; // 👈 port here

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
