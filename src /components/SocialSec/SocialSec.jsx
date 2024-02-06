import React from 'react';
import './SocialSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faTwitter, faInstagram, faDiscord, faThreads } from '@fortawesome/free-brands-svg-icons';
import { Col, Row } from 'react-bootstrap';

const SocialSection = () => {
  return (

    <div className="social-container">
      
      <div className="social-node" id="telegram">

        <FontAwesomeIcon icon={faThreads} size="3x" className="social-icon" />

        <div className="social-content">
          <h3>Threads</h3>
          <p>Announcements </p>
          <a href="https://t.me/yourchannel" className="social-link">Join now →</a>
        </div>
      </div>
      <div className="social-node" id="twitter">
        <FontAwesomeIcon icon={faTwitter} size="3x" className="social-icon" />
        <div className="social-content">
          <h3>TWITTER</h3>
          <p>News updates</p>
          <a href="https://twitter.com/yourprofile" className="social-link">Join now →</a>
        </div>
      </div>
      {/* Repeat for Instagram and Discord */}
      <div className="social-node" id="instagram">
        <FontAwesomeIcon icon={faInstagram} size="3x" className="social-icon" />
        <div className="social-content">
          <h3>INSTAGRAM</h3>
          <p>Chat with the community</p>
          <a href="https://instagram.com/yourprofile" className="social-link">Join now →</a>
        </div>
      </div>
      <div className="social-node" id="discord">
        <FontAwesomeIcon icon={faDiscord} size="3x" className="social-icon" />
        <div className="social-content">
          <h3>DISCORD</h3>
          <p>Chat with the community</p>
          <a href="https://discord.com/yourchannel" className="social-link">Join now →</a>
        </div>
      </div>
    </div>
  );
};

export default SocialSection;
