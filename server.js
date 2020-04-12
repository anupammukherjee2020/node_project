'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Anupam test node app : local to docker and build on dockerhub then AWS server docker compose ::: ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
