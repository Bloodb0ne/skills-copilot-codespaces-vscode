// Import the necessary modules
const express = require('express');
const home = require('./index');
const comments = require('./comments');
const users = require('./users');

// Create web server
const app = express();

// Set up the server
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});

// Set up the route
app.get('/comments', (req, res) => {
  res.send('This is the comments page');
});

app.get('/', (req, res) => {
  res.send('This is the home page');
});


app.get('/users', (req, res) => {
  res.send('This is the users page');
});

// Set up the routes
app.use('/', home);
app.use('/comments', comments);
app.use('/users', users);

