var auth = require('../../config/auth').auth;

module.exports = function(app){

  var api = app.api.auth;

  app.route('/api/auth/login')
    .post(api.login);

};
