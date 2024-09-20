// src/utils/scraper.js
const axios = require('axios');
const cheerio = require('cheerio');

const scrapeTeeTimes = async (url) => {
  try {
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    
    // Extract tee times from the HTML
    const teeTimes = [];
    $('.tee-time-selector').each((index, element) => {
      teeTimes.push($(element).text());
    });

    return teeTimes;
  } catch (error) {
    throw new Error('Failed to scrape tee times');
  }
};

module.exports = { scrapeTeeTimes };