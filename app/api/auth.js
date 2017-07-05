var login = require('../../config/auth').login;

var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('Usuario');

api.login = function(req, res) {

  var name = req.body.name;
  var password = req.body.password;

  login(name, password, function(result){
      if(result){
          res.json(result);
      } else {
          res.status(401).json({message: 'erro de autenticacao'});
      }
  })

};

module.exports = api;
