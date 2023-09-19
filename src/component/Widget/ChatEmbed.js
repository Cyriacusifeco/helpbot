import { createRoot } from 'react-dom';
import ChatWidget from './ChatWidget'; // Import your chat widget component

function initializeChatWidget() {
  // Create a container div for the widget
  <div className="widget-container">
    <p>The Widget</p>
  </div>;
  const container = document.createElement('div');
  document.body.appendChild(container);

  // Use createRoot to render the chat widget inside the container
  const root = createRoot(container);
  root.render(<ChatWidget />);

  // Additional configuration or customization can be done here
}

export default initializeChatWidget;
