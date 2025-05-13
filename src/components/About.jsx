// src/components/About.jsx
import React from 'react';
import './About.css';
import profileImg from '../assets/hero.png';
import pythonImg from '../assets/python.svg';
import csharpImg from '../assets/csharp.svg';
import javaImg from '../assets/java.svg';
import jsImg from '../assets/javascript.svg';
import kotlinImg from '../assets/kotlin.svg';
import gitImg from '../assets/github.svg';

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profileImg} alt="Chelsea" className="about-img" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              Hello, I’m Chelsea — a motivated and enthusiastic Computer Science
              graduate. I have experience in languages such as Python, C#, Java,
              JavaScript, and Kotlin through internships and research projects.
            </p>
            <p>
              I’m passionate about building responsive apps and back-end
              systems. Feel free to connect — I’d love to talk tech, projects,
              or hackathons!
            </p>
          </div>

          {/* Education section */}
          <div className="education-section">
            <h3>Education</h3>
            <p>
              <strong>Honors Bachelor of Computer Science (Mobile Computing)</strong><br />
              Sheridan College — Sep 2019 to Dec 2023
            </p>
          </div>

          {/* Languages section */}
          <div className="tech-icons">
            <div className="language-icon"><img src={pythonImg} alt="Python" /></div>
            <div className="language-icon"><img src={csharpImg} alt="C#" /></div>
            <div className="language-icon"><img src={javaImg} alt="Java" /></div>
            <div className="language-icon"><img src={jsImg} alt="JavaScript" /></div>
            <div className="language-icon"><img src={kotlinImg} alt="Kotlin" /></div>
            <div className="language-icon"><img src={gitImg} alt="Git" /></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
