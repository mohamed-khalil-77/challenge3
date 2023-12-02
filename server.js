// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('random-name-generator'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
