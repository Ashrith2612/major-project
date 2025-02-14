import React from 'react';
import './CSS/Profile.css';

const Profile = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" className="logo-img" />
          <h1>SAKHI</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Back To Home</a></li>
            <li><a href="/AboutUs.jsx">About Us</a></li>
            <li><a href="/profile" className="active">Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* Profile Page Body */}
      <div className="profile-container">
        <div className="profile">
          <img src="/images/user.jpg" alt="User Profile" className="profile-img" />
          <div className="profile-details">
            <div className="detail-item"><strong>Name:</strong> Joe</div>
            <div className="detail-item"><strong>Gender:</strong> Female</div>
            <div className="detail-item"><strong>Age:</strong> 28</div>
            <div className="detail-item"><strong>Contact Number:</strong> +1 234 567 890</div>
            <div className="detail-item"><strong>Blood Group:</strong> O+</div>
            <div className="detail-item"><strong>Family Contacts:</strong> +1 987 654 321</div>
            <div className="detail-item"><strong>Address:</strong> 123 Main St, City, Country</div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer>
        <p>&copy; 2024 Women Safety | <a href="#">Terms and Conditions</a></p>
      </footer>

      {/* Scroll to Top Button */}
      <div className="scroll-top">
        <button onClick={scrollToTop}>↑</button>
      </div>
    </div>
  );
};

export default Profile;
