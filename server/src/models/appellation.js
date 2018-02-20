var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AppellationSchema = new Schema({
  name: {type: String, required: true, unique: true},
  region: {type: Schema.ObjectId, ref: 'Region'},
  description: String
});

module.exports = mongoose.model('Appellation', AppellationSchema);

