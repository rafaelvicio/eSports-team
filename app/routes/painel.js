module.exports = function(app){

  var api = app.api.painel;

  app.get('/api/painel', api.teste);

};
