import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../CSS/home.css';

const Services = () => {
  return (
    <div className="services">
      {/* Gender Detection Service */}
      <div className="service">
        <Link to="/gapp"> {/* Navigate to GApp.jsx */}
          <img src="/images/service1.jpg" alt="Gender Detection" />
          <p>Gender Detection</p>
        </Link>
      </div>

      {/* Vibrate Feature */}
      <div className="service">
        <Link to="/EmergencyAlert"> {/* Navigate to Vibrate Feature page */}
          <img src="/images/service2.jpg" alt="Vibrate Feature" />
          <p>Vibrate Feature</p>
        </Link>
      </div>

      {/* Emergency Service */}
      <div className="service">
        <Link to="/eapp"> {/* Navigate to EApp.jsx */}
          <img src="/images/service3.jpg" alt="Emergency HelpLine" />
          <p>Emergency HelpLine</p>
        </Link>
      </div>

      {/* Share Live Location */}
      <div className="service">
        <Link to="/lapp"> {/* Navigate to Live Location page */}
          <img src="/images/service4.jpg" alt="Share Live Location" />
          <p>Share Live Location</p>
        </Link>
      </div>
    </div>
  );
};

export default Services;
