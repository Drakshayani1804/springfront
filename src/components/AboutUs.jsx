// src/components/AboutUs.jsx

import React from 'react';
import './AboutUs.css'; // Make sure this CSS file exists

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      
      <div className="about-us-description">
        <p>
          Welcome to our website! We are dedicated to providing you with the best service
          in property enhancement. Our team is passionate about transforming spaces and 
          creating beautiful environments for our clients.
        </p>
        <p>
          Our goal is to offer exceptional quality and innovative solutions to meet all 
          your property needs. Whether you are looking for renovation, furnishing, or 
          consultation, we are here to help you every step of the way.
        </p>
      </div>
      
      <div className="about-us-images">
        <img src="https://cdn.mos.cms.futurecdn.net/7bCmm6nzTmyixyq6vUjVXa-320-80.jpg" alt="Placeholder 1" />
        <img src="https://www.ceakayinteriors.com/images/blog/imageZkxqclE3KzY5UDZyMTM5QkFJWUdNQT09.jpg" alt="Placeholder 2" />
      </div>

      {/* Team Members Section */}
      <div className="team-section">
        <h2 className="team-section-title">Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="./images/i1.jpeg" alt="Team Member 1" className="team-member-image" />
            <h3 className="team-member-name">Akshaya</h3>
            <p className="team-member-role">Team Member</p>
          </div>
          <div className="team-member">
            <img src="./images/i2.jpeg" alt="Team Member 2" className="team-member-image" />
            <h3 className="team-member-name">Pratyusha</h3>
            <p className="team-member-role">Team Member</p>
          </div>
          <div className="team-member">
            <img src="./images/i3.jpeg" alt="Team Member 3" className="team-member-image" />
            <h3 className="team-member-name">Drakshayani</h3>
            <p className="team-member-role">Team Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
