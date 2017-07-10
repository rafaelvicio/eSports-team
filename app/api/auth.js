var mongoose = require('mongoose');
var jwt  = require('jsonwebtoken');

module.exports = function(app) {

     var api = {};
     var model = mongoose.model('Usuario');

     api.autentica = function(req, res) {

         model.findOne({
             login: req.body.login,
             senha: req.body.senha
         })
         .then(function(usuario) {
             if (!usuario) {
                 res.sendStatus(401);
             } else {
                 var token = jwt.sign( {login: usuario.login}, app.get('secret'), {
                     expiresIn: 86400
                 });
                 res.set('x-access-token', token);
                 res.end();
             }
         });
     };

    api.verificaToken = function(req, res, next) {

         var token = req.headers['x-access-token'];

         if (token) {
             jwt.verify(token, app.get('secret'), function(err, decoded) {
                 if (err) {
                     return res.sendStatus(401);
                 } else {
                     req.usuario = decoded;  
                     console.log('Usuario: ' + req.usuario.login);
                     next();
                  }
            });
        } else {
            return res.sendStatus(401);
          }
    }

    return api;
};