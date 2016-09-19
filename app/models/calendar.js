// app/models/calendar.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var calendarSchema = new Schema({
  monday    : Boolean, 
  tuesday   : Boolean,
  wednesday : Boolean,
  thursday  : Boolean,
  friday    : Boolean,
  saturday  : Boolean,
  sunday    : Boolean,
  startDate : Date,
  endDate   : Date
});

module.exports = mongoose.model('Calendar', calendarSchema);