const http = require('http');

const port = 4000; // important! same as security group and URL

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from EC2 Server!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
