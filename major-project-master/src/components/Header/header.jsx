import React, { useEffect } from 'react';
import '../../CSS/home.css';

const Header = ({ darkMode, toggleDarkMode }) => {
  useEffect(() => {
    const scrollButton = document.querySelector('.scroll-top button');
    if (scrollButton) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      });

      scrollButton.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
    }

    return () => {
      window.removeEventListener('scroll', () => {});
      scrollButton.removeEventListener('click', () => {});
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" className="logo-img" />
        <h1>SAKHI</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/" className="nav-link active">Home</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#contact" className="nav-link">Contact Us</a></li>
          <li><a href="AboutUs.jsx" className="nav-link">About Us</a></li>
          <li><a href="profile" className="nav-link">Profile</a></li>
        </ul>
      </nav>

      {/* Scroll to Top Button */}
      <div className="scroll-top">
        <button>↑</button>
      </div>
    </header>
  );
};

export default Header;
