import React from 'react';
import './Footer.css';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';


const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; {new Date().getFullYear()} Chelsea Nanda</p>
      <div className="footer-icons">
        <a href="https://github.com/chelseananda" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/chelseananda" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
