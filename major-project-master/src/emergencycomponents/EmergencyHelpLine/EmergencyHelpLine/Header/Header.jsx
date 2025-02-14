import React from 'react';
import { Link } from 'react-router-dom'; 
import "../../../../CSS/EApp.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" className="logo-img" />
        <h1>SAKHI</h1>
      </div>
      <nav>
        <ul>
          {/* Use Link component to navigate within the app */}
          <li><Link to="/" className="nav-link">Back To Home</Link></li>
          <li><a href="#emergency" className="nav-link active">Emergency</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
