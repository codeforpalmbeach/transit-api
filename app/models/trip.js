// app/models/trip.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var tripSchema = new Schema({
  routeId               : Schema.Types.ObjectId,
  serviceId             : Schema.Types.ObjectId,
  headsign              : String,
  shortName             : String,
  directionId           : Number,
  blockId               : String,
  shapeId               : Schema.Types.ObjectId,
  wheelchairAccessible  : Number, // 0 or (empty) = No info,
                                  // 1 = can accomodate at least one rider in wheelchair,
                                  // 2 = no riders in wheelchairs can be accommodated
  bikesAllowed          : Number  // 0 or (empty) = No info,
                                  // 1 = can accomodate at least one bike,
                                  // 2 = no bikes can be accommodated
});

module.exports = mongoose.model('Transfer', tripSchema);