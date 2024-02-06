import React from 'react';
import './style.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-logo">PreSen</div>
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/blog" className="navbar-link">Blog</Link>
          <Link to="/" className="navbar-link">Contact</Link>
        </div>
      </div>

      {/* Your content goes here */}
    </div>
  );
}

export default Navbar;