// in ActionProvider.jsx
import React from 'react';
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


  const processMessageToChatGPT = async (message)  => { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat
    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act

const app_id = "af872ea5" ;
const app_key = "1f290cdba824d10ee1c3e4d7a062ff01" ;
let msg = message ;
let url = 'https://api.edamam.com/search?q=' + msg + '&app_id=' + app_id + '&app_key=' + app_key;
  const response =  await fetch(url);
   const data = await response.json();
  console.log(data.hits[0].recipe.cuisineType[0]);
//console.log(data.hits);
const botMessage = createChatBotMessage(data.hits[0].recipe.cuisineType[0]);
setState((prev) => ({
    ...prev,
    messages: [...prev.messages, botMessage],
  }));
};

   
    
  

  // Put the handleHello function in the actions object to pass to the MessageParser
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            processMessageToChatGPT,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;