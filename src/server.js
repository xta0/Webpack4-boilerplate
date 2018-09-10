const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', function(req, res) {
  const pathTohtml = path.resolve(__dirname, '../dist/index.html');
  const content = fs.readFileSync(pathTohtml, 'utf-8');
  res.send(content);
});
app.use('/static', express.static(path.resolve(__dirname, '../dist')));
app.listen(3000);
