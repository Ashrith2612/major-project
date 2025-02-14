// src/components/Header.jsx
import React from "react";
import '../../CSS/GApp.css';

const Header = () => (
    <header>
        <div className="logo">
            <img src="/images/logo.png" alt="Logo" className="logo-img" />
            <h1>SAKHI</h1>
        </div>
        <nav>
            <ul>
                <li><a href="/">Back To Home</a></li>
                <li><a href="/gapp" className="active">Gender Detection</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
