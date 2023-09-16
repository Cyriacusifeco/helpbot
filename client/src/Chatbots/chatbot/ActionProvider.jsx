// in ActionProvider.jsx
import React from 'react';
// export default ActionProvider;
// const API_KEY = "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";

// eslint-disable-next-line react/prop-types
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

const processMessageToChatbotAPI = async (message, apiKey) => {
  // Define the API endpoint
  const apiUrl = 'http://localhost:5000/api/chatbot';

  // Create a request body with the input_text and apiKey
  const requestBody = JSON.stringify({
    input_text: message,
    apiKey: apiKey,
  });

  try {
    // Make a POST request to your API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    // Check if the response is successful (status code 200)
    if (response.status === 200) {
      // Parse the JSON response
      const data = await response.json();

      // Extract the response message from the API
      const responseMessage = data.message;

      // Create a chatbot message with the response
      const botMessage = createChatBotMessage(responseMessage);

      // Update the chatbot's state with the new message
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    } else {
      // Handle error responses here if needed
      console.error('API request failed with status:', response.status);
    }
  } catch (error) {
    console.error('Error while making API request:', error);
  }
};

// Pass processMessageToChatbotAPI as an action
return (
  <div>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        actions: {
          handleHello,
          processMessageToChatbotAPI, // Add the new function here
        },
      });
    })}
  </div>
);

};

export default ActionProvider;
