var http = require('http');
var app = require('./config/express');
//require('./config/database')('localhost/esc');
require('./config/database')('mongodb://esportsteam:esportsteam@ds123752.mlab.com:23752/esports-team');

http.createServer(app).listen(3000, function(){
  console.log('Servidor iniciado...');
});
