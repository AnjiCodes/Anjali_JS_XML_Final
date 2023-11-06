const express = require('express');
const axios = require('axios');
const router = express.Router();

// Define route for the books page
router.get('/books', async (req, res) => {
  // Placeholder data for demonstration purposes
  try {
    const booksList = await searchBooks();
    const pageTitle = 'Books';

    // Render the 'books' Pug template with the provided data
    res.render('books', { pageTitle, booksList });
  } catch (error) {
    // Handle any errors that occurred during fetching the books
    console.error('Error fetching books:', error.message);
    res.status(500).send('Error fetching books');
  }
});

// Add a new route for searching books
router.get('/books/search', async (req, res) => {
  const query = req.query.query; // Get the user's query from the URL query parameter
  try {
    const booksList = await searchBooks(query);
    const pageTitle = 'Books Search';

    // Render the 'books' Pug template with the search results
    res.render('books', { pageTitle, booksList });
  } catch (error) {
    // Handle any errors that occurred during the search
    console.error('Error searching for books:', error.message);
    res.status(500).send('Error searching for books');
  }
});

const API_KEY = 'AIzaSyDnFI-e7UAh-9g8SZQgmOmifrqYrkikb9M';

async function searchBooks(query = 'Vampire') {
  try {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;
    const response = await axios.get(apiUrl);

    var bookData = [];

    response.data.items.forEach((element) => {
      var data = {};
      data['title'] = element.volumeInfo.title;
      data['link'] = element.volumeInfo.previewLink;
      bookData.push(data);
    });
    return bookData;
  } catch (error) {
    console.error('Error fetching books:', error.message);
    return [];
  }
}

module.exports = router;
