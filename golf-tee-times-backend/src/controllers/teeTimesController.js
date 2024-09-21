// src/controllers/teeTimesController.js
const TeeTime = require('../models/TeeTime');

const getTeeTimes = async (req, res) => {
  try {
    const teeTimes = await TeeTime.find();
    res.json({ teeTimes });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tee times' });
  }
};

module.exports = { getTeeTimes };