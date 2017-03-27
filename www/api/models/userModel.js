var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
    name: {ype: String},
    password: {type: String},
    email: {type: String},
    read: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', userModel);
