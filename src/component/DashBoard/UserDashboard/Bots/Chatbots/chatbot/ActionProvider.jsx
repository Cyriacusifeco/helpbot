// in ActionProvider.jsx
import React from 'react';
const API_KEY = "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";

// eslint-disable-next-line react/prop-types
const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage('Hello. Nice to meet you.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };


  //Test Running with ChatGPT




 const processMessageToChatGPT = async (chatMessages)  => { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat
console.log(chatMessages);
    let apiMessages = { role: "assistant", content: chatMessages}

    const systemMessage = { role: "system", content: "Speak like a pirate"}



    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + "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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      const botMessage = createChatBotMessage(data.choices[0].message.content);
      
      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));

    });

   
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