import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App';
import './index.css';
import { AuthProvider } from './context/app-context';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
