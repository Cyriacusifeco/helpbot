import React from 'react';
<<<<<<< HEAD
import { createRoot } from 'react-dom/client';
=======
import ReactDOM from 'react-dom';
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
import App from './component/App/App';
import './index.css';
import { AuthProvider } from './context/app-context';

// eslint-disable-next-line react/no-deprecated
<<<<<<< HEAD
const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
=======
ReactDOM.render(
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
