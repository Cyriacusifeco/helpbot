import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App/App';
import './index.css';
import { AuthProvider } from './context/app-context';

// eslint-disable-next-line react/no-deprecated
const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
