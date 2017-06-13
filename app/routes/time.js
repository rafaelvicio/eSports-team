function verificaAutenticacao(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status('401').json('Não autorizado');
  }
}

module.exports = function(app){

  var api = app.api.time;

  app.route('/api/times')
    .get(verificaAutenticacao, api.lista)
    .post(verificaAutenticacao, api.adiciona);

  app.route('/api/times/:id')
      .get(verificaAutenticacao, api.buscaPorId)
      .delete(verificaAutenticacao, api.removePorId)
      .put(verificaAutenticacao, api.atualiza);

};
