const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

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

// Connect to MongoDB using mongoose.connect
mongoose.connect(dbUri, dbOptions)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

/*Connect to MongoDB using createConnection
const dbConnection = mongoose.createConnection(dbUri, dbOptions);

// Check if the connection was successful
dbConnection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

dbConnection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
*/

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for parsing JSON data
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Use morgan middleware for request logging
app.use(morgan('combined'));

// Import necessary controllers to handle form submission
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

// Use the userController to handle the registration form submission
app.use('/', userController);

// Use the authController to handle user login
app.use('/auth', authController);


app.get('/', (req, res) => {
  // Use the path module to resolve the correct file path
  const filePath = path.resolve(__dirname, 'public', 'registration.html');
  // Send the registration.html file as the response
  res.sendFile(filePath);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
