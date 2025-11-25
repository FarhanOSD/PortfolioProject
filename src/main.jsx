import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import App from './App.jsx'


// ← ADD THESE 2 LINES ONLY HERE (not in any component!)
ReactGA.initialize('G-VVNK0KBXPW');           // Your Measurement ID
ReactGA.send({ hitType: "pageview", page: window.location.pathname }); // First page

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
