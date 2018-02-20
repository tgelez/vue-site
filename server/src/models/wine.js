var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wineType = ['red', 'white', 'rose', 'sparkling'];

var WineSchema = new Schema({
	designation: String,
	producer: { type: Schema.ObjectId, ref: 'Producer', required: true },
	appellation: { type: Schema.ObjectId, ref: 'Appellation', required: true },
	type: { type: wineType, required: true }
});

module.exports = mongoose.model('Wine', WineSchema);
