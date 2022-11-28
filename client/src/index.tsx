import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ApiService from './services/apiServices';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

ApiService.init()
ApiService.setHeader()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

