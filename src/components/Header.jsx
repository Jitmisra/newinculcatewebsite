import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize intersection observer to animate elements on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Select all elements that should be animated when they come into view
    const hiddenElements = document.querySelectorAll('.team-member, .team-title, .legacy-text, .legacy-image-container, .contact-left, .contact-right');
    hiddenElements.forEach(el => {
      el.classList.add('hidden');
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up observer
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
      setMenuOpen(false); // Close the menu after clicking a link
    }
  };

  const handleJoinClick = () => {
    scrollToSection('contactus');
    // Or use the email option
    // window.location.href = 'mailto:In@inculcate.in?subject=Join%20as%20Bug%20Tester&body=I%20would%20like%20to%20join%20as%20a%20bug%20tester%20for%20Inculcate.';
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <span className="logo-in">in.</span>
        <span className="logo-culcate">culcate</span>
      </div>
      
      {/* Hamburger menu toggle button with animation class */}
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
