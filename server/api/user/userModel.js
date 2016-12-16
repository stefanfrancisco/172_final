var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  }
  //Add a field called Address of type string
  address: {
  	type: String,
  	unique: false, //Two users in same address
  	required: true //Unsure if it is required or not but might as well make it required
  }
});

module.exports = mongoose.model('user', UserSchema);
