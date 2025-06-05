import React from 'react';
import aboutus from "../utilities/images/slider3.jpg";
const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-hero">
        <h1>About Shimmer Jewellery</h1>
        <p className="aboutus-tagline">
          Where elegance meets craftsmanship.
        </p>
      </div>
      <div className="aboutus-content">
        <div className="aboutus-image">
          <img
            src={aboutus}
            alt="Jewellery Craft"
          />
        </div>
        <div className="aboutus-text">
          <h2>Our Story</h2>
          <p>
            Shimmer Jewellery was founded with a passion for timeless beauty and exquisite craftsmanship. For over a decade, we have been dedicated to creating unique, elegant pieces that celebrate life's precious moments.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We use only the finest materials and expert artisanship.</li>
            <li><strong>Trust:</strong> Our customers are at the heart of everything we do.</li>
            <li><strong>Innovation:</strong> We blend classic designs with modern trends.</li>
          </ul>
          <h2>Visit Us</h2>
          <p>
            Discover our collections online or visit our boutique at <b>123 Gold Street, Gem City</b>.
          </p>
        </div>
      </div>
      <div className="aboutus-footer">
        <h3>Follow Our Journey</h3>
        <div className="aboutus-socials">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;