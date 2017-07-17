var mongoose = require('mongoose');
var api = {};

var model = mongoose.model('Time');

api.adiciona = function(req, res) {

  model
    .create(req.body)
      .then(function(){
        res.json(time);

      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

api.atualiza = function(req, res) {

  model
    .findByIdAndUpdate(req.params.id, req.body)
      .then(function(time) {
        res.json(time);

      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

api.lista = function(req, res) {

  model
    .find({})
    .then(function(times) {
      res.json(times);

    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });

};

api.buscaPorId = function(req, res) {

  model
    .findById(req.params.id)
      .then(function(time){
        if(!time) throw Error('Time não encontrada');
        res.json(time);

      }, function(error){
        console.log(error);
        res.status(500).json(error);
      });

};

api.removePorId = function(req, res) {

  model
    .remove({_id: req.params.id})
      .then(function(){
        res.sendStatus(204);
      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

module.exports = api;
