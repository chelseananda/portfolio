// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import './Navbar.css'; 
import logoImg from '../assets/logo.png';


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 10);
      const sections = ['hero', 'about', 'experience', 'projects']
      const scrollPosition = window.screenY + 200;

      for (let i = 0; i < sections.length; i++ ){
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <=scrollPosition) {
          setActiveSection(section[i]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  
  return (
    <>
    <nav className={`navbar ${isShrunk ? 'shrink' : ''}`}>
      <div className="navbar-container">
      <div className="navbar-logo" onClick={() => setIsModalOpen(true)}>
        <img src={logoImg} alt="Chelsea" />
      </div>

      {/* Hamburger Icon*/}
      <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#hero" onClick={closeMenu} className={activeSection === 'hero' ? 'active-link' : ''}>Home</a></li>
            <li><a href="#about" onClick={closeMenu} className={activeSection === 'about' ? 'active-link' : ''}>About</a></li>
            <li><a href="#experience" onClick={closeMenu} className={activeSection ==='expereince' ? 'active-link' : ''}>Experience</a></li>
            <li><a href="#projects" onClick={closeMenu} className={activeSection ==='projects' ? 'active-link': ''}>Projects</a></li>
            <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=chelseananda.cn@gmail.com&su=Let's Connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="connect-btn"
                  onClick={closeMenu}
                >
                  Let's Connect!
                </a>
            </li>
          </ul>
      </div>
    </nav>

    {isModalOpen && (
      <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
        <div className="modal-content">
          <img src={logoImg} alt="Chelsea Full" />
        </div>
      </div>
    )}
    </>
  );
};

export default Navbar;
