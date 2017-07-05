var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var schema = mongoose.Schema({

  name: {
    type: String,
    required: true,
    index: {
      unique: true
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

schema.plugin(findOrCreate);
mongoose.model('Usuario', schema);
