import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { GlobalCSS } from 'GlobalCSS';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCSS />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
