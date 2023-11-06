const express = require('express');
const router = express.Router();


// Define route for the homepage
router.get('/', (req, res) => {
  // Placeholder data for demonstration purposes
  const pageTitle = 'Home';
  const message = 'Welcome to the Book Reader Website!';

  // Render the 'index' Pug template with the provided data
  res.render('index', { pageTitle, message });
});

module.exports = router;
