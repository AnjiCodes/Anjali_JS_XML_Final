const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || '3000';

// For Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// Set the path for static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Import and use the routes
const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');
const aboutRouter = require('./routes/about');
const contactRouter = require('./routes/contact');

app.use('/', indexRouter);
app.use('/', booksRouter);
app.use('/', aboutRouter);
app.use('/', contactRouter);
