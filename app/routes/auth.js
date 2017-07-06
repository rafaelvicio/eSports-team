module.exports = function(app){

  var api = app.api.auth;
  
  app.route('/api/auth/autenticar')
    .post(api.autentica);

  app.route('/api/auth/verificar')
    .get(api.verificaToken);

};
