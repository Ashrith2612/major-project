import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import GApp from './GApp.jsx';
import EApp from './EApp.jsx';
import LApp from './LApp.jsx';  
import AboutUs from './AboutUs.jsx';
import Profile from './Profile.jsx';
import EmergencyAlert from './Vibratecomponents/EmergencyAlert.jsx';


const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gapp" element={<GApp />} />
        <Route path="/eapp" element={<EApp />} />
        <Route path="/lapp" element={<LApp />} />
        <Route path="/AboutUs.jsx" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/EmergencyAlert" element={<EmergencyAlert />}/>
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
