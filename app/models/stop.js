// app/models/stop.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var stopSchema = new Schema({
  code                : String,
  name                : String,
  desc                : String,
  lat                 : Number,
  lon                 : Number,
  zoneId              : Schema.Types.ObjectId,
  stopUrl             : String,
  locationType        : Number, // 0 or (empty) = Stop, a locaiton where passengers board
                                // 1 = Station, a physical structure
  parentStation       : Number,
  stopTimezone        : String,
  wheelchairBoarding  : Number
});

module.exports = mongoose.model('Stop', stopSchema);