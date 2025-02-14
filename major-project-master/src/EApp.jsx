import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmergencyHelpLine from './emergencycomponents/EmergencyHelpLine/EmergencyHelpLine/EmergencyHelpLine';
import ContactsGrid from './emergencycomponents/EmergencyHelpLine/EmergencyHelpLine/ContactsGrid/ContactsGrid';
import SearchBar from './emergencycomponents/EmergencyHelpLine/EmergencyHelpLine/SearchBar/SearchBar';

const EApp = () => {
  return (
    <Routes>
      <Route path="/" element={<EmergencyHelpLine />} />
      <Route path="/contacts" element={<ContactsGrid />} /> 
      <Route path="/search" element={<SearchBar />} /> 
    </Routes>
  );
};

export default EApp;
