// src/components/Hero.jsx

import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container" data-aos="fade-up">
        <img src={heroImage} alt="Chelsea" className="hero-img" />
        <h1>
          I'm <span>Chelsea Nanda</span>, Software Developer | Mobile & Full-Stack Developer | Passionate about clean code, creative apps, and scalable systems.
        </h1>
        <p data-aos="fade-up">
          I have over 2 years of work experience from internships and freelancing where I have gained skills in DevOps, Android and full-stack development.
        </p>
        <div className="hero-buttons" data-aos="zoom-in">
          <a
            href="https://www.linkedin.com/in/chelseananda"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
          >
            Connect with Me
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn secondary"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
