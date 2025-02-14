import React from "react";
import LocationHeader from "./Locationcomponents/LocationHeader/LocationHeader";
import LocationMap from "./Locationcomponents/LocationMap/LocationMap";
import './CSS/LApp.css';

const Lapp = () => {
  return (
    <div>
      {/* Include the LocationHeader and LocationMap components */}
      <LocationHeader />
      <LocationMap />
    </div>
  );
};

export default Lapp;
