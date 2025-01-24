const axios = require('axios');
const cheerio = require('cheerio');

const scrapeWebsite = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    const textContent = $('body').text()
      .replace(/\s+/g, ' ')
      .trim();
    
    const images = [];
    $('img').each((index, element) => {
      const src = $(element).attr('src');
      if (src) {
        const absoluteUrl = new URL(src, url).href;
        images.push(absoluteUrl);
      }
    });
    
    return {
      url,
      content: textContent,
      images
    };
  } catch (error) {
    console.error('Scraping error:', error);
    throw new Error('Failed to scrape website');
  }
};

module.exports = { scrapeWebsite };