// app/models/frequency.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var frequencySchema = new Schema({
  tripId          : Schema.Types.ObjectId, 
  startTime       : Date,
  endTime         : Date,
  headwaySeconds  : Number,
  exactTimes      : Number
});

module.exports = mongoose.model('Frequency', frequencySchema);