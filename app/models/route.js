// app/models/route.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var routeSchema = new Schema({
  agencyId      : Schema.Types.ObjectId,
  shortName     : String,
  longName      : String,
  desc          : String,
  type          : Number,   // 0 = Tram, Streetcar, Light rail,
                            // 1 = Subway, Metro,
                            // 2 = Rail,
                            // 3 = Bus,
                            // 4 = Ferry,
                            // 5 = Cable car,
                            // 6 = Gondola, Suspended cable car, 
                            // 7 = Funicular
  url           : String,
  color         : String,   // HEX
  textColor     : String    // HEX
});

module.exports = mongoose.model('Route', routeSchema);