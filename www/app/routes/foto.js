module.exports = function(app){

  var api = app.api.foto;

  app.route('/api/fotos')
    .get(api.lista)
    .post(api.adiciona);

  app.route('/api/fotos/:id')
      .get(api.buscaPorId)
      .delete(api.removePorId)
      .put(api.atualiza);

};
