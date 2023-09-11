#!/usr/bin/node
// The overall structure of the server.js file is as follows:
// 1. Import the required modules
// 2. Initialize the app
// 3. Connect to the database
// 4. Define the routes
// 5. Start the server
// 6. Listen for requests
const express = require('express')
const colors =  require('colors')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');
const fileUpload = require('express-fileupload');
const dotenv = require('dotenv').config()
const connectDB = require('./config/db.js')
const bodyParser = require('body-parser');
const path = require('path');
const getPdfContent = require('./config/pdfhandler.js').getPdfContent;
const expressAsyncHandler = require('express-async-handler');
const morgan = require('morgan');
const axios = require('axios');
const port = process.env.PORT || 3000
console.log(`${port}`.cyan.underline)

//connectDB()
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

app.use(fileUpload());
app.use(cors()); 
app.use(bodyParser.json()); // Apply JSON body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api', require('./endpoint/users/users.js'))
app.use('/api', require('./endpoint/business/business.js'))
app.use('/api', require('./endpoint/query/query.js'))
app.use('/api', require('./endpoint/stats/stats.js'))
app.use('/file', require('./endpoint/file/file.js'))

app.get('/', (req, res) => {
    res.json({'status': 'success', 'message': 'Welcome to the Helpbot API'})
})

app.get('/status', (req, res) => {
    res.json({'status': 'success'})
})


/*app.listen(port, () =>
{
    console.log('welcome to the helpbot and the world of achievable goals'.rainbow)
})
*/


//const app = express();
//const port = process.env.PORT || 3000;

/*// MongoDB connection URI
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
*/
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

/*// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for parsing JSON data
app.use(express.json());
*/
// Serve static files from the "public" directory
app.use(express.static('public'));

// Use morgan middleware for request logging
app.use(morgan('combined'));

// Import necessary controllers to handle form submission
//const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const chatbotService = require('./controllers/chatbotService');

// Use the userController to handle the registration form submission
//app.use('/api/business', userController);

// Use the authController to handle user login
app.use('/auth', authController);


/*app.get('/', (req, res) => {
  // Use the path module to resolve the correct file path
  const filePath = path.resolve(__dirname, 'public', 'registration.html');
  // Send the registration.html file as the response
  res.sendFile(filePath);
});
*/
// Use the chatbotService to handle user chats
app.use('/api', chatbotService);

/*
// Endpoint to communicate with the Python chatbot
app.post('/api/chatbot', async (req, res) => {
  try {
    const { input_text } = req.body;

    // Send user input to the Python script
    const pythonResponse = await axios.post('http://localhost:7860/api/chatbot', { input_text });

    // Extract the chatbot response from the Python response
    const chatbotResponse = pythonResponse.data.response;

    res.json({ response: chatbotResponse });
  } catch (error) {
    console.error('Error communicating with chatbot:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
*/

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
