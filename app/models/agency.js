// app/models/agency.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var agencySchema = new Schema({
  name      : String, 
  url       : String,
  timezone  : String,
  language  : String,     // two letter ISO 639-1 code for primary language
                          // can be found @ http://www.loc.gov/standards/iso639-2/php/code_list.php
  phone     : String,
  fareUrl   : String,
  email     : String
});

module.exports = mongoose.model('Agency', agencySchema);