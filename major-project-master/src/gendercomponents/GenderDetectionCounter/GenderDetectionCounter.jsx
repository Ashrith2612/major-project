// src/components/GenderDetectionCounter.jsx
import React, { useEffect, useState } from "react";
import '../../CSS/GApp.css';

const GenderDetectionCounter = () => {
    const [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);

    useEffect(() => {
        const maleTarget = Math.floor(Math.random() * 25) + 1;
        const femaleTarget = Math.floor(Math.random() * 15) + 1;

        const maleInterval = setInterval(() => {
            setMaleCount((prev) => {
                if (prev < maleTarget) return prev + 1;
                clearInterval(maleInterval);
                return prev;
            });
        }, 50);

        const femaleInterval = setInterval(() => {
            setFemaleCount((prev) => {
                if (prev < femaleTarget) return prev + 1;
                clearInterval(femaleInterval);
                return prev;
            });
        }, 50);
    }, []);

    return (
        <div id="gender-detection-counter">
            <div id="male-counter" className="counter">
                <p>Male Count: <span>{maleCount}</span></p>
            </div>
            <div id="female-counter" className="counter">
                <p>Female Count: <span>{femaleCount}</span></p>
            </div>
        </div>
    );
};

export default GenderDetectionCounter;
