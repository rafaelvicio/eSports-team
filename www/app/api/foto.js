var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('Foto');

api.adiciona = function(req, res) {

};

api.atualiza = function(req, res) {

};

api.lista = function(req, res) {

  model
    .find({})
    .then(function(fotos) {
      console.log(error);
      res.status(500).json(error);
    }), function(error) {
      res.json(fotos);
    }

};

api.buscaPorId = function(req, res) {

}

api.removePorId = function(req, res) {

}

module.exports = api;
