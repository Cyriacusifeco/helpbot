<<<<<<< HEAD
import { Col } from 'react-bootstrap';
import './Chatbots.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Bot = () => {
  return (
    <>
      <div className="bots-container">
        <Col md={5} className="mx-auto">
          <div className="profile">
            <h3>Helpbot Chatbot</h3>
            <div className="profileInfo">
              <div className="main-content">
                <h4>Hi, Barbie</h4>
                <p>Date created</p>
              </div>
              <p>
                Open <FontAwesomeIcon icon={faArrowCircleRight} />
              </p>
            </div>
          </div>
        </Col>
        <div className="grid grid-cols-12 gap-6">
          {/* Card 1 */}
          <div className="col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
            <div className="flex flex-col h-full p-5">
              <header>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-rose-500">
                    <svg
                      className="w-9 h-9 fill-current text-rose-50"
                      viewBox="0 0 36 36"
                    >
                      {/* SVG content remains the same */}
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"></path>
                    </svg>
                  </div>
                </div>
              </header>
              <div className="grow mt-2">
                <a
                  className="inline-flex text-slate-800 hover:text-slate-900 mb-1"
                  href="/chatbot.settings-theme"
                  id="bot.id %"
                >
                  <h2 className="text-xl leading-snug font-semibold">
                    {/* {{ botName }} */}
                  </h2>
                </a>
                {/* Additional content can be added here */}
              </div>
              <footer className="mt-5">
                <div className="text-sm font-medium text-slate-500 mb-2">
                  {/* {{ bot.created_at }} */}
                </div>
                <div className="flex justify-between items-center">
                  <div>{/* Additional status elements can be added here*/}</div>
                  <div>
                    <a
                      className="text-sm font-medium text-indigo-500 hover:text-indigo-600"
                      href="/chatbot.settings-theme"
                      id="bot.id"
                    >
                      Open -&gt;
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
=======
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
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
    </>
  );
};

<<<<<<< HEAD
export default Bot;
=======
export default Chatbots;
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
