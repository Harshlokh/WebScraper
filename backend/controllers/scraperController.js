const axios = require('axios');
const cheerio = require('cheerio');

const scrapeWebsite = async (url) => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Extracting data from the website
    const data = {
      headings: [],
      paragraphs: [],
      navigation: [],
      images: [],
      footer: [],
    };

    // Scraping headings
    $('h1, h2, h3, h4, h5, h6').each((index, element) => {
      data.headings.push($(element).text().trim());
    });

    // Scraping paragraphs
    $('p').each((index, element) => {
      data.paragraphs.push($(element).text().trim());
    });

    // Scraping navigation links
    $('nav a').each((index, element) => {
      data.navigation.push($(element).attr('href'));
    });

    // Scraping images and their URLs
    $('img').each((index, element) => {
      const imgSrc = $(element).attr('src');
      const imgAlt = $(element).attr('alt') || 'No alt text';
      data.images.push({ src: imgSrc, alt: imgAlt });
    });

    // Scraping footer content
    $('footer').each((index, element) => {
      data.footer.push($(element).text().trim());
    });

    return data;
  } catch (err) {
    console.error('Error scraping website:', err);
    throw new Error('Failed to scrape website');
  }
};

module.exports = { scrapeWebsite };
