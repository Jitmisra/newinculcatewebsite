import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const hiddenElements = document.querySelectorAll('.team-member, .team-title, .legacy-text, .legacy-image-container, .contact-left, .contact-right');
    hiddenElements.forEach(el => {
      el.classList.add('hidden');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      hiddenElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const handleJoinClick = () => {
    scrollToSection('contactus');
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <span className="logo-in">in.</span>
        <span className="logo-culcate">culcate</span>
      </div>
      
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <a onClick={() => scrollToSection('home')} style={{cursor: 'pointer'}}>Home</a>
        <a onClick={() => scrollToSection('about')} style={{cursor: 'pointer'}}>About</a>
        <a onClick={() => scrollToSection('features')} style={{cursor: 'pointer'}}>Features</a>
        <a onClick={() => scrollToSection('contactus')} style={{cursor: 'pointer'}}>Contact Us</a>
        <button className="join-button" onClick={handleJoinClick}>Join as bug tester</button>
      </nav>
    </header>
  );
};

export default Header;
