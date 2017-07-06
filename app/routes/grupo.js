module.exports = function(app){

  var api = app.api.grupo;

  app.get('/api/grupos', api.lista);

};
