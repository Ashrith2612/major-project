import React from 'react';
import Header from './Header/Header.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import ContactsGrid from './ContactsGrid/ContactsGrid.jsx';
import "../../../CSS/EApp.css";
  

const EmergencyHelpLine = () => {
  return (
    <div>
      <Header />
      <div className="container">
  
        <ContactsGrid />
      </div>
      <footer>
        <p>&copy; 2024 Women Safety | <a href="#">Terms and Conditions</a></p>
      </footer>
    </div>
  );
};

export default EmergencyHelpLine;
