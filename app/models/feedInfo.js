// app/models/feedInfo.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var feedInfoSchema = new Schema({
  publisherName   : String, 
  publisherUrl    : String,
  language        : String,   // IETF BCP 47 language code
  startDate       : Date,
  endDate         : Date,
  version         : String
});

module.exports = mongoose.model('FeedInfo', feedInfoSchema);