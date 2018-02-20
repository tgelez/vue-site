var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BottleSchema = new Schema({
    wine: { type: Schema.ObjectId, ref: 'Wine', required: true }
});
/*
    ,
    vintage: {type: Number, max: Date.prototype.getFullYear()},
    number: {type: Number, min: 0, required: true},
    bestDrinkAfter: {type: Number, min: this.vintage}
});
*/
module.exports = mongoose.model('Bottle', BottleSchema);
