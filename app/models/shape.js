// app/models/shape.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var shapeSchema = new Schema({
  shapeId         : Schema.Types.ObjectId,
  ptLat           : Number,
  ptLon           : Number,
  ptSequence      : Number,
  distTraveled    : Number
});

module.exports = mongoose.model('Shape', shapeSchema);