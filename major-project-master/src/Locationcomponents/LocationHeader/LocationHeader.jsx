
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import "../../CSS/LApp.css";

const LocationHeader = () => {
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
          <li>
            <Link to="/" className="nav-link active">Back To Home</Link>  {/* Changed href to Link */}
          </li>
        </ul>
      </nav>

      {/* Scroll to Top Button */}
      <div className="scroll-top">
        <button>↑</button>
      </div>
    </header>
  );
};

export default LocationHeader;
