const  mongoose = require('mongoose')
const  model = mongoose.model('Time')

const adiciona = (req, res) => 
  model.create(req.body)
        .then( ( time ) => 
          res.status( 200 ).json( time ) )
        .catch( ( erro ) => {
          console.log( erro )
          res.status( 500 ).json( erro )
        })

const atualiza = function(req, res) {

  model
    .findByIdAndUpdate(req.params.id, req.body)
      .then(function(time) {
        res.json(time);

      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

const lista = function(req, res) {

  model
    .find({})
    .then(function(times) {
      res.json(times);

    }, function(error) {
      console.log(error);
      res.status(500).json(error);
    });

};

const buscaPorId = function(req, res) {

  model
    .findById(req.params.id)
      .then(function(time){
        if(!time) throw Error('time não encontrada');
        res.json(time);

      }, function(error){
        console.log(error);
        res.status(500).json(error);
      });

};

const removePorId = function(req, res) {

  model
    .remove({_id: req.params.id})
      .then(function(){
        res.sendStatus(204);
      }, function(error) {
        console.log(error);
        res.status(500).json(error);
      });

};

const api = {
  adiciona,
  atualiza,
  lista,
  buscaPorId,
  removePorId
 }

module.exports = api;
