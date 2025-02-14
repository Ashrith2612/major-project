import React from 'react';
import "../../../../CSS/EApp.css";


const ContactCard = ({ name, number, address, image }) => {
  const sendCallNotification = () => {
    alert("Call notification sent");
  };

  return (
    <div className="contact-card">
      <img src={image} alt="Contact" />
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Number:</strong> {number}</p>
      <p><strong>Address:</strong> {address}</p>
      <button className="contact-btn" onClick={sendCallNotification}>Contact</button>
    </div>
  );
};

export default ContactCard;
