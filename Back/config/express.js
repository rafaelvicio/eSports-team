var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.set('secret', 'meusegredo'); 
app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-XSRF-TOKEN, x-access-token, Authorization, Content-Type, Accept");
    next();
});

consign({ cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes/auth.js')
  .then('routes/painel.js')
  .then('routes')
  .into(app);

module.exports = app;
