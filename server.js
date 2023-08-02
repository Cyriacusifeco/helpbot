const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection URI
const dbUri = 'mongodb://localhost:27017/users';

// MongoDB connection options (useNewUrlParser, useUnifiedTopology are still valid)
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Will add more options as needed
};

// Connect to MongoDB using createConnection
const dbConnection = mongoose.createConnection(dbUri, dbOptions);

// Check if the connection was successful
dbConnection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

dbConnection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Import the userController to handle the registration form submission
const userController = require('./controllers/userController');

// Use the userController to handle the registration form submission
app.use('/register', userController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
