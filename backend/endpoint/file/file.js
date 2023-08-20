const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const getPdfContent = require('../../config/pdfhandler').getPdfContent;
const multer = require('multer');

const router = express.Router();

// Configure multer for handling file uploads
const storage = multer.memoryStorage(); // Store the file as buffer in memory
const upload = multer({ storage: storage });

// File upload route
router.post('/upload', (req, res) => {
  // Check if request contains data
  if (!req.body) {
    return res.status(400).send('No binary data received.');
  }

  // Generate a unique filename
  const fileName = `file_${Date.now()}.bin`;

  // Build the file path
  const filePath = path.join(__dirname, 'uploads');
  console.log('File path:', filePath);
  const fileFullPath = path.join(filePath, fileName);

  // Save the binary data as a file
  fs.writeFile(filePath, req.body, (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).send('Error saving file.');
    }

    console.log('File saved:', filePath);

    // Respond with a success message
    res.status(200).send('Binary data received, logged, and file saved.');
  });
});

module.exports = router;
