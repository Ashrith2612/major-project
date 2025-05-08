import React, { useEffect } from 'react';
import "../../CSS/LApp.css";

const LocationMap = () => {
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src =
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyAI5S07zzkMvVeE2DF790_hzdI9yAuEJYU&callback=initMap";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        window.initMap = initMap;
      } else {
        initMap();
      }
    };

    loadGoogleMaps();

    return () => {
      if (window.google && window.initMap) {
        delete window.initMap;
      }
    };
  }, []);

  const initMap = () => {
    const iiitBasarLocation = { lat: 18.8819968, lng: 77.9208459 };
    const iiitBasarAddress = "IIIT Basar, Nirmal District, Telangana, India – 504107";

    const createMapAndMarker = (lat, lng, title) => {
      const location = { lat, lng };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: location,
      });
      new window.google.maps.Marker({
        position: location,
        map: map,
        title,
      });
      updateLocationDetails(lat, lng, iiitBasarAddress);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          createMapAndMarker(latitude, longitude, "Your Current Location");

          setInterval(() => {
            navigator.geolocation.getCurrentPosition((newPos) => {
              const { latitude: newLat, longitude: newLng } = newPos.coords;
              createMapAndMarker(newLat, newLng, "Updated Location");
            });
          }, 10000);
        },
        (error) => {
          console.warn("Geolocation error:", error.message);
          alert("Location access denied. Showing IIIT Basar by default.");
          createMapAndMarker(iiitBasarLocation.lat, iiitBasarLocation.lng, "IIIT Basar");
        }
      );
    } else {
      alert("Geolocation not supported. Showing IIIT Basar.");
      createMapAndMarker(iiitBasarLocation.lat, iiitBasarLocation.lng, "IIIT Basar");
    }
  };

  const updateLocationDetails = (lat, lng, fallbackAddress) => {
    document.getElementById("latitude").textContent = lat.toFixed(6);
    document.getElementById("longitude").textContent = lng.toFixed(6);
    document.getElementById("time").textContent = new Date().toLocaleString();

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAI5S07zzkMvVeE2DF790_hzdI9yAuEJYU`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results[0]) {
          document.getElementById("locationName").textContent =
            data.results[0].formatted_address;
        } else {
          document.getElementById("locationName").textContent = fallbackAddress;
        }
      })
      .catch((err) => {
        console.error("Geocoding error:", err);
        document.getElementById("locationName").textContent = fallbackAddress;
      });
  };

  return (
    <div className="location-container">
      <h2 className="location-title">Real-Time Location</h2>
      <div id="map" className="map-container"></div>
      <div className="location-details">
        <h2>Location Details</h2>
        <p>Latitude: <span id="latitude"></span></p>
        <p>Longitude: <span id="longitude"></span></p>
        <p>Time: <span id="time"></span></p>
        <p>Location Name: <span id="locationName"></span></p>
      </div>
    </div>
  );
};

export default LocationMap;
