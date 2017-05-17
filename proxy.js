var fs = require('fs');
var http = require('http'),
    httpProxy = require('http-proxy');

httpProxy.createProxyServer(
  {
    target:'http://localhost:8081',
    ssl: {
      key: fs.readFileSync('./ssl/key.pem', 'utf8'),
      cert: fs.readFileSync('./ssl/cert.pem', 'utf8'),
      passphrase: 'password'
    },
  }).listen(8000); 
console.log('Running!');