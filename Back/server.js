var http = require('http');
var app = require('./config/express');
//require('./config/database')('localhost/esc');
require('./config/database')('esports:esports@ds113785.mlab.com:13785/esports');

http.createServer(app).listen(3000, function(){
  console.log('Servidor iniciado...');
});
