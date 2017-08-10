var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');
const  cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

consign({ cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes/auth.js')
  .then('routes/painel.js')
  .then('routes')
  .into(app);

module.exports = app;
