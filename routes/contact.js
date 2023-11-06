const express = require('express');
const router = express.Router();

// Define route for the contact page
router.get('/contact', (req, res) => {
  // Placeholder data for demonstration purposes
  const pageTitle = 'Contact Us';
  const email = 'example@email.com';
  const phone = '+1 123-456-7890';

  // Render the 'contact' Pug template with the provided data
  res.render('contact', { pageTitle, email, phone });
});

module.exports = router;
