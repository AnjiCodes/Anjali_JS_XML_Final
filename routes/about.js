const express = require('express');
const router = express.Router();

// Define route for the about page
router.get('/about', (req, res) => {
  // Placeholder data for demonstration purposes
  const pageTitle = 'About Us';
  const aboutText = 'We are passionate book lovers who started this website to share our love for reading with the world.';

  // Render the 'about' Pug template with the provided data
  res.render('about', { pageTitle, aboutText });
});

module.exports = router;
