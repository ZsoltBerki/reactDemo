const path = require('path');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/:path', function (req, res) {
  res.sendFile(path.join(__dirname, './public/' + req.params.path));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
