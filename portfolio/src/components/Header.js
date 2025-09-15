import React, { useState, useEffect } from "react";

function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            Sakib Khan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;