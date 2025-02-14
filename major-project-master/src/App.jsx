import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header/header.jsx';
import Body from './components/Body/body.jsx';
import Services from './components/Services/services.jsx';
import Form from './components/Form/form.jsx';
import Footer from './components/Footer/footer.jsx';
import DarkModeToggle from './components/DarkModeToggle/DarkModeToggle.jsx';

const App = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    const toggleDarkMode = () => {
        const newMode = darkMode ? 'light' : 'dark';
        setDarkMode(!darkMode);
        localStorage.setItem('theme', newMode);
        document.body.className = newMode;
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
            document.body.className = savedTheme;
        }
    }, []);

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <Header />
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Body />
            <Services />
            <Form />
            <Footer />
        </div>
    );
};

export default App;
