// app/models/calendarDate.js
// author: christopher cabrera

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var calendarDateSchema = new Schema({
  serviceId     : Schema.Types.ObjectId,    // composite key
  date          : Date,                     // composite key
  exceptionType : Number    // 1 = service added, 2 = service removed
});

module.exports = mongoose.model('CalendarDate', calendarDateSchema);