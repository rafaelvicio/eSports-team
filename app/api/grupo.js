var api = {};

api.lista = function(req, res) {
  var grupos = [
    {_id: 1, titulo: 'grupo'},
    {_id: 2, titulo: 'grupo2'}
  ];

  res.json(grupos);
};

module.exports = api;
