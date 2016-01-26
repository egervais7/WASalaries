var mongoose = require('mongoose');

var state_workersSchema = new mongoose.Schema({
  Agency_Title: String,
  Agy: Number,
  employee_name: String,
  job_title: String,
  Sal20111: Number,
  Sal20121: Number,
  Sal20131: Number,
  Sal2014: Number
});

module.exports = mongoose.model('state_workers', state_workersSchema);
