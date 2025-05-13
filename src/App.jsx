// src/App.jsx

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About'; // Import About component
import './index.css';
import Footer from './components/Footer';
import Experience from './components/Experience';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
