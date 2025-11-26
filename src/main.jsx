import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from './App.jsx';

// ← Initialize once at the top
ReactGA.initialize('G-7WVMLKTYTP'); // ← Use your correct GA4 ID here!

// Optional: Send initial pageview (some people prefer to let App handle all)
ReactGA.send({
  hitType: 'pageview',
  page: window.location.pathname + window.location.search,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
