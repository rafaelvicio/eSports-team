var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

var auth = require('./auth').auth;
 
app.use(auth.initialize());

consign({ cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes')
  .into(app);

module.exports = app;
