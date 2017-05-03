var mongoose = require('mongoose');

var schema = mongoose.Schema({

  email: {
    type: String
  },

  senha: {
    type: String
  },

  nome: {
    type: String
  },

  sobrenome: {
    type: String
  },

  nick: {
    type: String
  },

  aniversario: {
    type: Date
  },

  biografia: {
    type: String
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
    default: Date.now
  }

});

mongoose.model('Usuario', schema);
