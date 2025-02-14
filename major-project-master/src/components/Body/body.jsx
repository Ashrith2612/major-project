import React, { useState, useEffect } from 'react';
import '../../CSS/home.css';
import Services from '../Services/services';

const Body = () => {
  const [query, setQuery] = useState('');
  const [isEmergency, setIsEmergency] = useState(false);

  const handleEmergencyClick = async () => {
    setIsEmergency(true);
    document.body.classList.add('blinking');

    try {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Emergency! Help is on the way.',
          to: '9381694740',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert('Emergency notification sent successfully!');
        } else {
          alert('Failed to send emergency notification.');
        }
      } else {
        alert('Failed to send notification: Server error.');
      }
    } catch (error) {
      console.error('Error sending notification:', error);
      alert('Error: Unable to send emergency notification.');
    }

    setTimeout(() => {
      document.body.classList.remove('blinking');
      setIsEmergency(false);
    }, 3000);
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const services = document.querySelectorAll('.service');

    if (query) {
      services.forEach((service) => {
        const description = service.querySelector('p').textContent.toLowerCase();
        service.style.display = description.includes(query.toLowerCase()) ? 'block' : 'none';
      });
    } else {
      services.forEach((service) => {
        service.style.display = 'block';
      });
    }
  }, [query]);

  return (
    <div>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search Services..." 
          value={query} 
          onChange={handleSearchChange} 
        />
      </div>

      <div className="emergency" id="emergency">
        <h2>EMERGENCY</h2>
        <button 
          className={`emergency-button ${isEmergency ? 'activated' : ''}`}
          onClick={handleEmergencyClick}
        >
          {isEmergency ? 'Emergency Activated!' : 'Emergency Button'}
        </button>
      </div>

     
    </div>
  );
};

export default Body;
