import React from 'react';
import logo from './logo.jpg';
import './Header.css';

const Header = ({ className }) => {
  return (
    <header className={`header ${className}`}>
      {/* Logo box */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Navigation and Bell grouped as a single box */}
      <div className="nav-bell-container">
        <nav>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">EVENTS</a></li>
            <li><a href="#">CORE TEAM</a></li>
            <li><a href="#">MEMBERSHIP</a></li>
            <li><a href="#">BLOGS</a></li>
            <li><a href="#">TESTIMONIALS</a></li>
          </ul>
        </nav>
        <div className="notification-icon">
          <span className="material-icons">🕭</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
