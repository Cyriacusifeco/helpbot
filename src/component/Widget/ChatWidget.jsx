import { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
      {/* Chat widget content */}
      {isOpen && (
        <div className="chat-content">
          <div className="icon-closed scale-in-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              /*stroke-width="0"*/
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10H15C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10H7Z"></path>
            </svg>
          </div>
        </div>
      )}

      {/* Chat icon */}
      <button className="chat-icon" onClick={toggleChat}>
        Chat
      </button>
    </div>
  );
};
export default ChatWidget;
