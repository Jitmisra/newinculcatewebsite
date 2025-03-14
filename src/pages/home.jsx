import React from 'react';
import Header from '../components/Header';
import './home.css';
import appPic from '../assets/apppics.png';
import mandala from '../assets/Mandala.png';
import indiaMap from '../assets/indiamap.png';
import leftMandala from '../assets/Leftmandala.png';

// Import team member images
import teammember1 from '../assets/teammembersimage/teammember1.png';
import teammember2 from '../assets/teammembersimage/teammember2.png';
import teammember3 from '../assets/teammembersimage/teammember3.png';
import teammember4 from '../assets/teammembersimage/teammember4.png';
import teammember5 from '../assets/teammembersimage/teammember5.png';
import teammember6 from '../assets/teammembersimage/teammember6.png';
import teammember7 from '../assets/teammembersimage/teammember7.png';
import teammember8 from '../assets/teammembersimage/teammember8.png';
import teammember9 from '../assets/teammembersimage/teammember9.png';

// Define team members array with LinkedIn URLs
const teamMembers = [
  { name: "Srijan", image: teammember1, linkedIn: "https://www.linkedin.com/in/srijan-b55a71292/" },
  { name: "Swastika Acharya", image: teammember2, linkedIn: "https://www.linkedin.com/in/swastika-acharya-059b04261/" },
  { name: "Pankaj Baid", image: teammember3, linkedIn: "https://www.linkedin.com/in/pankaj-baid-0109b1226/" },
  { name: "Rishik Chowdary", image: teammember4, linkedIn: "https://www.linkedin.com/in/rishik-chowdary-b8b430299/" },
  { name: "Hemanth Tenneti", image: teammember5, linkedIn: "https://www.linkedin.com/in/hemanth10eti/" },
  { name: "Agnik Misra", image: teammember6, linkedIn: "https://www.linkedin.com/in/agnikmisra/" },
  { name: "Aaloke Eppalapalli", image: teammember7, linkedIn: "https://www.linkedin.com/in/aalokee/" },
  { name: "Aditya Trivedi", image: teammember8, linkedIn: "https://www.linkedin.com/in/adityatrivedi/" },
  { name: "Manajit Rath", image: teammember9, linkedIn: "https://www.linkedin.com/in/manajitrath/" }
];

const Home = () => {
  return (
    <div className="home-container">
     
      <div className="intro-section">
      <Header />
        <h1 className="main-title">Rediscovering Bharat</h1>
        <h2 className="subtitle">By a new-age knowledge sharing app</h2>
        <div className="image-container">
          <img src={mandala} alt="Mandala" className="mandala-image" />
          <img src={appPic} alt="App Pic" className="app-pic" />
        </div>
      </div>
      <div className="legacy-section">
        <img src={leftMandala} alt="Decorative Mandala" className="left-mandala" />
        <div className="legacy-text">
          <h1 className="legacy-title">6000+</h1>
          <h2 className="legacy-subtitle">Years of Legacy</h2>
          <p className="legacy-description">
            Discover the rich heritage and culture of Bharat that spans over 6000 years.From ancient civilizations to modern advancements, explore the journey of a nation that has always been at the forefront of knowledge and innovation.
          </p>
        </div>
        <div className="legacy-image-container">
          <img src={indiaMap} alt="India Map" className="india-map" />
        </div>
      </div>
      
      {/* Team Section */}
      <div className="team-section">
        <h1 className="team-title">Our Team</h1>
        <div className="team-members-container">
          {/* Top row with 4 members */}
          <div className="team-row">
            {teamMembers.slice(0, 4).map((member, index) => (
              <div className="team-member" key={index}>
                <div className="member-image">
                  <img src={member.image} alt={`Team Member ${index + 1}`} width="100%" height="100%" />
                  <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                <p className="member-name">{member.name}</p>
              </div>
            ))}
          </div>
          
          {/* Bottom row with 5 members */}
          <div className="team-row">
            {teamMembers.slice(4).map((member, index) => (
              <div className="team-member" key={index + 4}>
                <div className="member-image">
                  <img src={member.image} alt={`Team Member ${index + 5}`} width="100%" height="100%" />
                  <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                <p className="member-name">{member.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Contact Us Section */}
      <div className="contact-section" id="contactus">
        <div className="contact-content">
          <div className="contact-left">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-text">
              Have questions or want to collaborate? We'd love to hear from you. 
              Reach out to us for more information about Inculcate and our mission.
            </p>
            <a href="mailto:In@inculcate.in" className="contact-email">
              <span className="email-icon">✉️</span>
              In@inculcate.in
            </a>
          </div>
          <div className="contact-right">
            <div className="contact-decoration">
              <div className="contact-circle"></div>
              <div className="contact-circle"></div>
              <div className="contact-circle"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Section */}
      <footer className="footer-section">
        <p className="footer-text">©️ 2025 in.culcate. All rights reserved. Made with ❤️🇮🇳</p>
      </footer>
    </div>
  );
};

export default Home;