var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var envSchema = new Schema({
  name: String,
  url: 'String',
  desc: 'String',
  date: 'String'
});

module.exports = mongoose.model('env', envSchema);
