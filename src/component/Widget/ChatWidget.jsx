import { useState } from 'react';
import './ChatWidget.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        id="chat-icon"
        className={`icon-closed scale-in-center  ${isOpen ? 'hidden' : ''}`}
        style={{
          border: 'none',
          padding: '10px',
          backgroundColor: '#2d4059',
          borderRadius: '50%',
          cursor: 'pointer',
          position: 'fixed',
          bottom: '2rem',
          right: '6rem',
          transition: 'transform 1s ease-in-out',
          transform: 'translateX(100%)',
        }}
        onClick={toggleChat}
      >
        <svg
          stroke="#000"
          fill="#fff"
          viewBox="0 0 24 24"
          strokeWidth="0"
          height="3em"
          width="3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM7 10C7 12.7614 9.23858 15 12 15C14.7614 15 17 12.7614 17 10H15C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10H7Z"></path>
        </svg>
      </div>
      {isOpen && (
        <div className="chat-content chat-closed">
          <iframe
            src="http://localhost:3000/"
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              width: '300px',
              height: '400px',
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '5px',
              boxShadow: '2px 5px rgba(0, 0, 0, 0.5)',
            }}
          ></iframe>
        </div>
      )}
    </>
  );
};
export default ChatWidget;
