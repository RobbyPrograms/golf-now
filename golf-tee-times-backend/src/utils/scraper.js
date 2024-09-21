// src/utils/scraper.js
const axios = require('axios');
const cheerio = require('cheerio');
const TeeTime = require('../models/TeeTime');

const scrapeTeeTimes = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);

    // Extract tee times from the HTML
    const teeTimes = [];
    $('.tee-time-selector').each((index, element) => {
      const courseName = $(element).find('.course-name').text();
      const time = $(element).find('.time').text();
      const date = $(element).find('.date').text();

      const teeTime = new TeeTime({ courseName, time, date });
      teeTimes.push(teeTime);
    });

    // Save tee times to the database
    await TeeTime.insertMany(teeTimes);

    return teeTimes;
  } catch (error) {
    throw new Error('Failed to scrape tee times');
  }
};

module.exports = { scrapeTeeTimes };