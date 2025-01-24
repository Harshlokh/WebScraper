const express = require('express');
const { scrapeWebsite } = require('../controllers/scraperController');  // Import controller

const router = express.Router();

// Route for scraping website content
router.get('/scrape', async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const scrapedData = await scrapeWebsite(url);
    return res.json(scrapedData);
  } catch (err) {
    return res.status(500).json({ error: 'Error scraping website' });
  }
});

module.exports = router;
