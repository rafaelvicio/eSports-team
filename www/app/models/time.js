var mongoose = require('mongoose');

var schema = mongoose.Schema({

  nome: {
    type: String,
    required: true
  },

  tag: {
    type: String,
    max: 3,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  biografia: {
    type: String,
    required: true
  },

  creationDate: {
    type: Date,
    default: Date.now,
    required: true
  }

});

mongoose.model('Time', schema);
