import React, { useState } from 'react';
import axios from 'axios';
import { FaHeading, FaParagraph, FaLink, FaImage, FaCog } from 'react-icons/fa';

const Scraper = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleScrape = async () => {
    try {
      setError(null);
      const response = await axios.get('http://localhost:5000/api/scrape', {
        params: { url },
      });
      setData(response.data);
    } catch (err) {
      console.error('Error scraping website:', err);
      setError('Failed to scrape the website.');
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Website Scraper</h1>
  
    <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
      <input
        type="text"
        placeholder="Enter website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleScrape}
        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-transform transform hover:scale-105"
      >
        Scrape Website
      </button>
    </div>
   
    <h1 className='text-2xl bg-green-500 shadow-lg font-bold'>This takes some seconds plz wait</h1>

    {error && (
      <p className="text-red-500 text-center text-lg font-semibold mt-4">{error}</p>
    )}
  
    {data && (
      <div className="mt-8">
        {/* Headings */}
        {data.headings.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              <FaHeading className="inline mr-2" />
              Headings
            </h3>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                {data.headings.map((heading, index) => (
                  <li key={index} className="text-lg text-gray-700">
                    {heading}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
  
        {/* Paragraphs */}
        {data.paragraphs.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              <FaParagraph className="inline mr-2" />
              Paragraphs
            </h3>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                {data.paragraphs.map((para, index) => (
                  <li key={index} className="text-lg text-gray-700">
                    {para}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
  
        {/* Navigation Links */}
        {data.navigation.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              <FaLink className="inline mr-2" />
              Navigation Links
            </h3>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                {data.navigation.map((link, index) => (
                  <li key={index} className="text-lg text-gray-700">
                    <a
                      href={link}
                      className="text-blue-500 hover:text-blue-700 underline transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
  
        {/* Images */}
        {data.images.length > 0 && (
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-blue-700 mb-4">
      <FaImage className="inline mr-2" />
      Images
    </h3>
    <div className="bg-white p-6 shadow-lg rounded-lg grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {data.images.map((img, index) => (
        <div key={index} className="text-center">
          <img
            src={img.src}
            alt={img.alt || "Image"}
            className="w-auto max-h-48 mx-auto rounded-lg shadow-md"
          />
          <a
            href={img.src}
            className="text-blue-500 hover:text-blue-700 underline block mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            URL
          </a>
        </div>
      ))}
    </div>
  </div>
)}
  
        {/* Footer Content */}
        {data.footer.length > 0 && (
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              <FaCog className="inline mr-2" />
              Footer Content
            </h3>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <ul className="list-disc pl-6 space-y-2">
                {data.footer.map((footer, index) => (
                  <li key={index} className="text-lg text-gray-700">
                    {footer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )}
  </div>
  
  );
};

export default Scraper;
