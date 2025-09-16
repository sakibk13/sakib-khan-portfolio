import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, activeLink]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">Sakib Khan</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'education' ? 'active' : ''}`} href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`} href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`} href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;