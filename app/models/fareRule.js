// app/models/fareRule.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var fareRuleSchema = new Schema({
  routeId           : Schema.Types.ObjectId, 
  originId          : Schema.Types.ObjectId,
  destinationId     : Schema.Types.ObjectId,
  containsId        : Schema.Types.ObjectId
});

module.exports = mongoose.model('FareRule', fareRuleSchema);