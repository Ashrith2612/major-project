import React, { useState, useEffect } from "react";
import "../../CSS/DarkModeToggle.css";


 // Import dark mode styles


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark mode class to the body element
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="dark-mode-toggle">
      <button id="toggle-theme" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
