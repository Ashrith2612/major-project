import React, { useState, useEffect } from "react";

const EmergencyAlert = () => {
  const [isShaking, setIsShaking] = useState(false);
  const [shakeThreshold, setShakeThreshold] = useState(25); // Adjust threshold for sensitivity

  // Function to trigger vibration
  const triggerVibration = () => {
    if (navigator.vibrate) {
      navigator.vibrate([800, 200, 800]); // Pattern: Vibrate -> Pause -> Vibrate
      console.log("Vibration triggered.");
    } else {
      console.error("Vibration not supported on this device or browser.");
      alert("Vibration not supported on this device or browser.");
    }
  };

  // Function to simulate sending an emergency message
  const sendEmergencyNotification = () => {
    alert("🚨 Emergency notification sent to police and family!");
    console.log("Emergency: Notifying contacts...");
    // Simulate API call to send messages
    sendMessageToContacts();
  };

  // Simulated API call to send emergency messages
  const sendMessageToContacts = () => {
    console.log("Message API: Sending emergency messages...");
    // Add actual API integration here, e.g., Twilio, Firebase, etc.
    setTimeout(() => {
      console.log("Message sent successfully to emergency contacts.");
    }, 1000);
  };

  // Function to handle device shake detection
  useEffect(() => {
    const handleMotion = (event) => {
      const { accelerationIncludingGravity } = event;
      const { x, y, z } = accelerationIncludingGravity;

      const magnitude = Math.sqrt(x ** 2 + y ** 2 + z ** 2);
      console.log(`Motion detected: Magnitude = ${magnitude}`); // Log magnitude for debugging

      if (magnitude > shakeThreshold) {
        setIsShaking(true);
        sendEmergencyNotification();
        triggerVibration();
      }
    };

    // Request motion permission for iOS devices
    const enableMotion = async () => {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        try {
          const permission = await DeviceMotionEvent.requestPermission();
          if (permission === "granted") {
            console.log("Motion detection permission granted.");
            window.addEventListener("devicemotion", handleMotion);
          } else {
            alert("Permission for motion detection denied.");
          }
        } catch (error) {
          console.error("Error requesting motion permission:", error);
        }
      } else {
        console.log("Permission not required for motion detection.");
        window.addEventListener("devicemotion", handleMotion);
      }
    };

    enableMotion();

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, [shakeThreshold]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Emergency Alert System</h1>
      <button style={styles.button} onClick={triggerVibration}>
        Vibrate Device
      </button>
      <p style={styles.info}>
        {isShaking
          ? "Shake detected! Emergency notification sent."
          : "Shake your device or click the button to test."}
      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    background: "linear-gradient(to right, #e52d27,rgb(87, 7, 10))",
    color: "white",
    height: "18vh",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#fff",
    color: "#b31217",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s",
  },
  buttonHover: {
    transform: "scale(1.1)",
  },
  info: {
    marginTop: "20px",
    fontSize: "18px",
  },
};

export default EmergencyAlert;
