var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var schema = mongoose.Schema({

  login: {
    type: String,
    require: true,
    index: {
      unique: true
    }
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
