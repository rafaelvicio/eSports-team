module.exports = function(app){

  var api = app.api.usuario;

  app.route('/api/usuarios')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/api/usuarios/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
