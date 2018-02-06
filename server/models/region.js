var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegionSchema = new Schema({
  name: {type: String, required: true, unique: true},
  country: {type: String, required: true}
});

module.exports = mongoose.model('Region', RegionSchema);

