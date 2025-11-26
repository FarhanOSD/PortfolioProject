import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

import Navbar from './components/Pro/Navbar';
import Hero from './components/Pro/Hero';
import About from './components/aboutSection/About';
import Projects from './components/Projects/Projects';
import Tech from './components/Clients/Tech';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Custom hook to track page views safely
function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
      // Optional: add title
      title: document.title,
    });
  }, [location]);
}

function App() {
  usePageTracking(); // ← Just call it here! Clean & safe

  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
