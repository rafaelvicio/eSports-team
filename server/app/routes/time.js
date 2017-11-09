module.exports = function(app){

  var api = app.api.time;
  var auth = app.api.auth;

  app.route('/api/times')
    .get(auth.verificaToken, api.lista)
    .post(api.adiciona);

  app.route('/api/times/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
