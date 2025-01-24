const mongoose = require('mongoose');

const ScrapedDataSchema = new mongoose.Schema({
  url: { type: String, required: true },
  navigation: [String],
  titles: [String],
  headings: [String],
  banners: [String],
  images: [
    {
      url: String,
      alt: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('ScrapedData', ScrapedDataSchema);
