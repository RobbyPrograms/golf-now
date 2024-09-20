// src/controllers/teeTimesController.js
const { fetchTeeTimes } = require('../services/teeTimesService');

const getTeeTimes = async (req, res) => {
  try {
    const teeTimes = await fetchTeeTimes();
    res.json({ teeTimes });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tee times' });
  }
};

module.exports = { getTeeTimes };