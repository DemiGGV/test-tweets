import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import { GlobalCSS } from 'GlobalCSS';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/test-tweets">
      <GlobalCSS />
      <App />
    </BrowserRouter>
  </StrictMode>
);
