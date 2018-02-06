var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProducerSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: String,
  address: String
});

module.exports = mongoose.model('Producer', ProducerSchema);

