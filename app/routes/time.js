var auth = require('../../config/auth').auth;

module.exports = function(app){

  var api = app.api.time;

  app.route('/api/times')
    .get(auth.authenticate, api.lista)
    .post(auth.authenticate, api.adiciona);

  app.route('/api/times/:id')
      .get(auth.authenticate, api.buscaPorId)
      .delete(auth.authenticate, api.removePorId)
      .put(auth.authenticate, api.atualiza);

};
