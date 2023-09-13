import Chatbot from "react-chatbot-kit";
import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";
import 'react-chatbot-kit/build/main.css';
//import '../Bot.css';

const Chatbots = () => {
  return (
    <>
    <div> 
      <div  style={{maxWidth: "500px"}}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      </div>
    </div>
    </>
  );
};

export default Chatbots;