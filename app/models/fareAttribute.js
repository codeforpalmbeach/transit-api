// app/models/fareAttribute.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var fareAttributeSchema = new Schema({
  fareId            : Schema.Types.ObjectId,
  price             : Number, 
  currencyType      : String,   // ISO 4217 currency code found @ http://en.wikipedia.org/wiki/ISO_4217

  paymentMethod     : Number,   // 0 = fare paid on board, 
                                // 1 = fare paid prior to boarding

  transfers         : String,   // 0 = no transfers permitted on fare,
                                // 1 = passenger may transfer once,
                                // 2 = passenger may transfer twice,
                                // (empty) = unlimited transfers

  transferDuration  : Number    // length of time in seconds before xfer expires
});

module.exports = mongoose.model('FareAttribute', fareAttributeSchema);