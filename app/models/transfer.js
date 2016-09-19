// app/models/transfer.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var transferSchema = new Schema({
  fromStopId      : Schema.Types.ObjectId,
  toStopId        : Schema.Types.ObjectId,
  transferType    : Number, // 0 or (empty) = Recommended xfer point between two routes
                            // 1 = This is a timed xfer between two routes,
                            // 2 = The xfer requires a min transfer time
                            // 3 = Xfers are not possible between routes
  minTransferTime : Number
});

module.exports = mongoose.model('Transfer', transferSchema);