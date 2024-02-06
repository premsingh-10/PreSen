// Banner.js
import React from 'react';
import Logo from '../assets/blog.png';
import './style.css'; 

const Banner = () => {
    return (
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">PreSen Blog</h1>
          <p className="banner-subtitle">The best way to make your blog popular and grow your audience is by creating high quality content and promoting it on social media platforms. You must understand the problems your target audience is having and then help them solve it. We have created the ultimate guide on how to increase your blog traffic with 27 proven tips that you</p>
        </div>
        <img
          className="banner-image"
          src={Logo} // Replace with your actual image URL
          alt="PreSen Blog"
        />
      </div>
    );
  };

export default Banner;
