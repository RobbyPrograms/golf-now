// src/services/teeTimesService.js
const { scrapeTeeTimes } = require('../utils/scraper');

const fetchTeeTimes = async () => {
  return await scrapeTeeTimes('URL_OF_GOLF_COURSE_WEBSITE');
};

module.exports = { fetchTeeTimes };