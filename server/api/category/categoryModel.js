var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {
    type: String,
    unique: true, //"I'm a unique category"
    required: true
  }
});

module.exports = mongoose.model('category', CategorySchema);
