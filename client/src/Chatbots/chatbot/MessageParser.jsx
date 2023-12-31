import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = async (message) => {
    if (message.includes('hello')) {
      actions.handleHello();
    } else {
      // Assuming your processMessageToChatbotAPI function is asynchronous
      try {
        // Pass the message and apiKey as parameters
        const apiKey = "6511c6be4bb06a55fc5c2b39"; // Replace with your actual API key
        await actions.processMessageToChatbotAPI(message, apiKey);
      } catch (error) {
        console.error(error); // Log any errors that occur during the API call
      }
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
