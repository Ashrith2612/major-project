import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Header from "./gendercomponents/Header/Header.jsx";
import Footer from "./gendercomponents/Footer/Footer.jsx";
import ScrollTopButton from "./gendercomponents/ScrollTopButton/ScrollTopButton.jsx";
import RedirectButton from "./gendercomponents/RedirectButton/RedirectButton.jsx";
import * as faceapi from 'face-api.js';

const GApp = () => {
  const [isWebCamActive, setIsWebCamActive] = useState(false);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [expressions, setExpressions] = useState([]);

  const startWebCam = () => {
    setIsWebCamActive(true);

    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
      faceapi.nets.ageGenderNet.loadFromUri('/models'),
    ])
    .then(() => {
      const video = document.getElementById("video");
      if (!video) {
        console.error("Video element not found!");
        return;
      }

      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then((stream) => {
          video.srcObject = stream;
        })
        .catch((error) => {
          console.error("Error accessing webcam:", error);
        });

      video.addEventListener("play", () => {
        const videoContainer = document.getElementById("video-container");
        const canvas = faceapi.createCanvasFromMedia(video);
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        videoContainer.append(canvas);
        const canvasContext = canvas.getContext("2d");
        canvasContext.willReadFrequently = true;

        faceapi.matchDimensions(canvas, video);

        setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender();

          canvasContext.clearRect(0, 0, canvas.width, canvas.height);

          const resizedDetections = faceapi.resizeResults(detections, video);

          faceapi.draw.drawDetections(canvas, resizedDetections);
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections);

          let maleCount = 0;
          let femaleCount = 0;
          let detectedExpressions = [];

          resizedDetections.forEach((detection) => {
            const { gender, expressions } = detection;
            if (gender === "male") maleCount++;
            else if (gender === "female") femaleCount++;

            const dominantExpression = Object.entries(expressions).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
            detectedExpressions.push(dominantExpression);
          });

          setMaleCount(maleCount);
          setFemaleCount(femaleCount);
          setExpressions(detectedExpressions);
        }, 600);
      });
    })
    .catch((error) => {
      console.error("Error loading models:", error);
    });
  };

  return (
    <>
      <div className="container">
        <Header />
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>Gender Detection</h2>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Males Detected: {maleCount}</p>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Females Detected: {femaleCount}</p>
        <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Expressions: {expressions.join(", ") || "No face detected"}</p>
        <RedirectButton onClick={startWebCam} />
        {isWebCamActive && (
          <div id="video-container" style={{ position: 'relative', display: 'inline-block' }}>
            <video id="video" width="640" height="480" autoPlay muted style={{ display: 'block', margin: '0 auto' }}></video>
          </div>
        )}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              padding: '10px 20px',
              backgroundColor: '#f79',
              color: '#fff',
              fontSize: '18px',
              textDecoration: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              display: 'inline-block',
              transition: 'background-color 0.3s, transform 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e67e22'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f79'}
          >
            Go to Home Page
          </Link>
        </div>
      </div>
      <Footer />
      <ScrollTopButton />
    </>
  );
};

export default GApp;
