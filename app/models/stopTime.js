// app/models/stopTime.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var stopTimeSchema = new Schema({
  tripId                  : Schema.Types.ObjectId,
  arrivalTime             : Date,
  departureTime           : Date,
  stopId                  : Schema.Types.ObjectId,
  stopSequence            : Number,
  stopHeadsign            : String,
  pickupType              : Number, // 0 = Regularly scheduled pickup,  (default)
                                    // 1 = No pickup available,
                                    // 2 = Must phone agency to arrange pickup,
                                    // 3 = Must coordinate with driver to arrange pickup
  dropOffType             : Number, // 0 = Regularly scheduled drop off,  (default)
                                    // 1 = No drop off available,
                                    // 2 = Must phone agency to arrange drop off,
                                    // 3 = Must coordinate with driver to arrange drop off
  shapeDistanceTraveled   : Number, 
  timepoint               : Number  // empty = Times are considered exact.
                                    // 0 = Times are considered approximate,
                                    // 1 = Times are considered exact
});

module.exports = mongoose.model('StopTime', stopTimeSchema);