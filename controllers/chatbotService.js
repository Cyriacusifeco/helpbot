const axios = require('axios');
const express = require('express');
const router = express.Router();

// Endpoint to communicate with the Python chatbot
router.post('/chatbot', async (req, res) => {
  try {
    const { input_text } = req.body;

    // Send user input to the Python script
    const pythonResponse = await axios.post('http://localhost:7860/api/chatbot', { input_text });

    // Extract the chatbot response from the Python response
    const chatbotResponse = pythonResponse.data.response;

    res.json({ response: chatbotResponse });
  } catch (error) {
    console.error('Error communicating with chatbot:', error);
    res.status(500).json({ error: 'An error occurred in chatbotService' });
  }
});

module.exports = router;
