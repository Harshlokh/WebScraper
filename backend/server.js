const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const scraperRoutes = require('./routes/scraperRoutes');  // Import scraper routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://harshlokhande486:gr0c1HyK8D7qMtLO@cluster0.8udbb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

// Routes
app.use('/api', scraperRoutes);  // Register scraper routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
