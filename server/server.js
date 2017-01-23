var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.use('/', express.static(path.join(__dirname, '../dist/')))

app.listen(port, function () {
  console.log('Listening on port: ', port);
});
