import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="logo-text">JDK<span className="logo-accent">Center</span></span>
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
            <li><a href="#courses" onClick={() => setIsMobileMenuOpen(false)}>Courses</a></li>
            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#feedbacks" onClick={() => setIsMobileMenuOpen(false)}>Feedbacks</a></li>
            <li><a href="#enroll" onClick={() => setIsMobileMenuOpen(false)}>Enroll</a></li>
            <li><a href="#certification" onClick={() => setIsMobileMenuOpen(false)}>Certification</a></li>
            <li><a href="#contact" className="contact-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <div className={`bar ${isMobileMenuOpen ? 'animate' : ''}`}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
