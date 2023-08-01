const express = require('express');
const app = express();
const port = 3000; // Choose any port number you prefer

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Simple response to test if the server is running
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
