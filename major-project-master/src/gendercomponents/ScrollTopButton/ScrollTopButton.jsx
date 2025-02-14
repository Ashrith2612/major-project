// src/components/ScrollTopButton.jsx
import React from "react";
import '../../CSS/GApp.css';

const ScrollTopButton = () => (
    <div className="scroll-top">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </div>
);

export default ScrollTopButton;
