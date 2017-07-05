var login = require('../../config/auth').login;

module.exports = function(app){

  var api = app.api.auth;

  app.route('/api/auth/login')
    .post(api.login);

};
