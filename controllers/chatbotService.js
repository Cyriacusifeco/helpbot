const axios = require('axios');
const express = require('express');
const router = express.Router();

// Endpoint to communicate with the Python chatbot
router.post('/chatbot', async (req, res) => {
  try {
    const { apiKey, input_text } = req.body;

    // Send user input and API key to the Python script
    const pythonResponse = await axios.post('http://localhost:7860/api/chatbot', { 
	    apiKey,
	    input_text,
    });

console.log('Python Response:', pythonResponse);

    // Extract the chatbot response from the Python response
    const chatbotResponse = pythonResponse.data.response;

    res.json({ response: chatbotResponse });
  } catch (error) {
    console.error('Error communicating with chatbot:', error);
    res.status(500).json({ error: 'An error occurred in chatbotService' });
  }
});

module.exports = router;
