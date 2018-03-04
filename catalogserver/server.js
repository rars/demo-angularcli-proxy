const express = require('express');

const server = express();
server.use('/', express.static(__dirname + '/wwwroot'));

server.get('/api/config', (req, res) => {
  res.send('{"publicKey": "MyPublicKey"}');
});

server.listen(5000);
