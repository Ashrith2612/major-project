import React, { useEffect } from 'react';
import "../../CSS/LApp.css";

const LocationMap = () => {
  useEffect(() => {
    // Load the Google Maps API script dynamically
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAI5S07zzkMvVeE2DF790_hzdI9yAuEJYU&callback=initMap";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      window.initMap = initMap;
    };

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Initialize the map and set the location logic
  const initMap = () => {
    let randomLatitude = 28.7041 + (Math.random() - 0.5) * 0.1;  // Random latitude near Delhi
    let randomLongitude = 77.1025 + (Math.random() - 0.5) * 0.1;  // Random longitude near Delhi

    const location = { lat: randomLatitude, lng: randomLongitude };

    const map = new window.google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
    });

    const marker = new window.google.maps.Marker({
      position: location,
      map: map,
      title: "Random Location",
    });

    // Set the details for Latitude, Longitude, and Time
    document.getElementById("latitude").textContent = randomLatitude.toFixed(4);
    document.getElementById("longitude").textContent = randomLongitude.toFixed(4);
    document.getElementById("time").textContent = new Date().toLocaleString();

    // Updating location every 10 seconds with new random location for demo purpose
    setInterval(() => {
      randomLatitude = 28.7041 + (Math.random() - 0.5) * 0.1;
      randomLongitude = 77.1025 + (Math.random() - 0.5) * 0.1;

      const newLocation = { lat: randomLatitude, lng: randomLongitude };

      marker.setPosition(newLocation);
      map.setCenter(newLocation);

      // Update details with new values
      document.getElementById("latitude").textContent = randomLatitude.toFixed(4);
      document.getElementById("longitude").textContent = randomLongitude.toFixed(4);
      document.getElementById("time").textContent = new Date().toLocaleString();
    }, 10000); // Update every 10 seconds
  };

  return (
    <div className="location-container">
      <h2 className="location-title">Real-Time Location</h2>

      {/* Google Map Container */}
      <div id="map" className="map-container"></div>

      {/* Location Details */}
      <div className="location-details">
        <h2>Location Details</h2>
        <p>Latitude: <span id="latitude"></span></p>
        <p>Longitude: <span id="longitude"></span></p>
        <p>Time: <span id="time"></span></p>
      </div>
    </div>
  );
};

export default LocationMap;
