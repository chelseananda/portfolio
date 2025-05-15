import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    setIsLogoClicked(true);
    setTimeout(() => setIsLogoClicked(false), 300);
  };

  return (
    <nav className="navbar">
      <div 
        className={`nav-logo ${isLogoClicked ? 'clicked' : ''}`}
        onClick={handleLogoClick}
      >
        <img src={logo} alt="Logo" />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Me</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a
          href="https://www.linkedin.com/in/chelseananda/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-connect"
        >
          Let's Connect!
        </a>
      </div>
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="mobile-menu-icon"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
