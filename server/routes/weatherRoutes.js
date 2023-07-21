// routes/weatherRoutes.js
const express = require('express');
const router = express.Router();

// Import your weather controller (you need to create it)
const weatherController = require('../controllers/weatherController');

// Define the API routes
router.get('/weather', weatherController.getWeatherData);
router.post('/weather', weatherController.createWeatherData);
// Add other routes as needed

module.exports = router;
