// connection for express
const express = require('express');
const app = express();

// port details where index.js will first run
const path = require('path');
const port = process.env.PORT || '3000';

//for pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//it'll start the server
app.listen(port, () => {
console.log(`Listening on http://localhost:${port}`);
});

// Set the path for static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
  res.render('layout');
});
