// src/models/TeeTime.js
const mongoose = require('mongoose');

const teeTimeSchema = new mongoose.Schema({
  courseName: String,
  time: String,
  date: String,
});

const TeeTime = mongoose.model('TeeTime', teeTimeSchema);

module.exports = TeeTime;