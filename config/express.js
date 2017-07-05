var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('secret', 'meusegredo'); 
app.use(express.static('./public'));
app.use(bodyParser.json());

consign({ cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes/auth.js')
  .then('routes')
  .into(app);

module.exports = app;
