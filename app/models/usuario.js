var mongoose = require('mongoose');

var schema = mongoose.Schema({

  login: {
    type: String, 
     required: true
  },
  
  password: {
    type: String,
    required: true
  },

  nome: {
    type: String
  },

  email: {
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
