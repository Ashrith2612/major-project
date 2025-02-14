import React from 'react';
import './CSS/AboutUs.css';


const AboutUs = () => {
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
            <li><a href="/AboutUs.jsx" className="active">About Us</a></li>
            <li><a href="/Profile">Profile</a></li>
          </ul>
        </nav>
      </header>

      {/* About Us Page Body */}
      <div className="about-container">
        <div className="about-content">
          <h2>About SAKHI - Women's Safety Application</h2>
          <p>
            SAKHI is a women-centric safety application designed to provide assistance and peace of mind to women
            in distressing situations. With features like live location sharing, emergency contact alerts, and a
            gender detection system, the app ensures that women feel safe and secure wherever they are.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to empower women with the tools and knowledge to protect themselves and ensure that help
            is just a click away. We aim to make personal safety an easily accessible priority and provide resources
            that can be used in emergencies.
          </p>

          <h3>Safety Features</h3>
          <ul>
            <li><strong>Emergency HelpLine:</strong> Connect instantly with emergency contacts or services.</li>
            <li><strong>Live Location Sharing:</strong> Share your real-time location with trusted contacts.</li>
            <li><strong>Vibrate Alert:</strong> Send subtle, discreet alerts to others during distress.</li>
            <li><strong>Gender Detection:</strong> Automatically identifies if you are in a potentially unsafe situation.</li>
          </ul>

          <h3>Safety Rules and Regulations</h3>
          <p>In case of an emergency, it's important to stay calm and follow certain rules to ensure your safety:</p>
          <ul>
            <li><strong>Stay Calm:</strong> Try to remain calm and assess the situation clearly.</li>
            <li><strong>Use the Emergency Button:</strong> In case of immediate danger, press the emergency button to alert family, friends, and authorities.</li>
            <li><strong>Share Your Location:</strong> Always share your location with a trusted contact or authorities when necessary.</li>
            <li><strong>Stay Aware:</strong> Be aware of your surroundings and avoid secluded areas, especially at night.</li>
            <li><strong>Call for Help:</strong> Always call for help if you feel threatened or unsafe.</li>
          </ul>

          <h3>Our Team</h3>
          <p>
            SAKHI is developed by a team of passionate individuals committed to women’s safety and empowerment. We
            believe that everyone deserves to live in a world free from fear and violence.
          </p>
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

export default AboutUs;
