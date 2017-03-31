var mongoose = require('mongoose');

var schema = mongoose.Schema({

  email: {
    type: String,
    required: true
  },

  senha: {
    type: String,
    required: true
  },

  nome: {
    type: String,
    required: true
  },

  sobrenome: {
    type: String,
    required: true
  },

  nick: {
    type: String,
    required: true
  },

  aniversario: {
    type: Date,
    required: true
  },

  biografia: {
    type: String,
    required: true
  },

  times: [
    {
      nome: {
        type: String
      },
      tag: {
        type: String
      }
    }
  ],

  dataCriacao: {
    type: Date,
    default: Date.now,
    required: true
  }

});

mongoose.model('Usuario', schema);
