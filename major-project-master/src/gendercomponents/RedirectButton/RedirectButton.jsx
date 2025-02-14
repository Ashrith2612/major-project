import React from "react";
import '../../CSS/GApp.css';

const RedirectButton = ({ onClick }) => (
  <div className="button-container">
    <button onClick={onClick}>
      Start Gender Detection
    </button>
  </div>
);

export default RedirectButton;
