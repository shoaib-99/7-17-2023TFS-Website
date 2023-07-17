import React from 'react';
import './partners.css'; // Import the CSS file for the component

import instagramLogo from '../img/instagram-logo.png';
import nikeLogo from '../img/nike.png';
import googleLogo from '../img/google-logo.png';
import uberLogo from '../img/uber.png';
import youtubeLogo from '../img/youtube-logo.png';
import zameenLogo from '../img/Zameen-Logo.jpg';
import amazonLogo from '../img/Amazon-Logo.png';
import fordLogo from '../img/Ford-logo.jpg';
import facebookLogo from '../img/facebook-logo.png';
import pumaLogo from '../img/puma-logo.jpg';

const logos = [nikeLogo, instagramLogo, googleLogo, uberLogo, youtubeLogo, zameenLogo, amazonLogo, fordLogo, facebookLogo, pumaLogo ];

const partners = () => {
  return (
    <div className="container-partner">
    <div className="logo-carousel">
      <h1 className="myservicesheading">OUR PARTNERS</h1>
      <div className="carousel-inner">
        {logos.map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default partners;