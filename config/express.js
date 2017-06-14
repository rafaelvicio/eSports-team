var express = require('express');
var app = express();
var consign = require('consign');
var bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport= require('passport')

app.use(cookieParser());
app.use(session(
  { secret: 'esport segredo', 
    resave: true, 
    saveUninitialized: true 
   }
));

app.use(passport.initialize());
app.use(passport.session());

consign({ cwd: 'app'})
  .include('models')
  .then('api')
  .then('routes')
  .into(app);

module.exports = app;
