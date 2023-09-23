// in MessageParser.jsx
// in MessageParser.js
import React from 'react';

// eslint-disable-next-line react/prop-types
const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    if (message.includes('hello')) {
      // eslint-disable-next-line react/prop-types
      actions.handleHello();
    }


    // eslint-disable-next-line react/prop-types
    actions.processMessageToChatbotAPI(message);
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
