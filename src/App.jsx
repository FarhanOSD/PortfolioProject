import React from 'react'
import Navbar from './components/Pro/Navbar'
import Hero from './components/Pro/Hero'
import About from './components/aboutSection/About'
import Projects from './components/Projects/Projects'
import Clients from './components/Clients/Clients'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import Developer from './components/Experience/Developer'
import Tech from './components/Clients/Tech'


import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Tech/>
      {/* <Clients /> */}
      <Experience/>
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App