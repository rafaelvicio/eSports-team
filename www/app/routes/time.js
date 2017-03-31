module.exports = function(app){

  var api = app.api.time;

  app.route('/v1/times')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/v1/times/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualia);

}
