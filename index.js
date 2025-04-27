const express = require('express');  // Assuming you are using Express
const app = express();

const PORT = 3000; // 👈 here you set your port number

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

