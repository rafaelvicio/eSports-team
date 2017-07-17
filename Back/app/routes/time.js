module.exports = function(app){

  var api = app.api.time;

  app.route('/api/times')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/api/times/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
