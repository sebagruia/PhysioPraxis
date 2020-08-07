import React from "react";
import "./mapLocation.css";

const MapLocation = () => {
  const source =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3243.895078755658!2d8.503259531871974!3d49.81086165243958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd78e9b578243b%3A0x592fa300e43bbe90!2sNibelungenstra%C3%9Fe%2042%2C%2064560%20Riedstadt!5e0!3m2!1sro!2sde!4v1596562898473!5m2!1sro!2sde";
  return (
    <div>
      <iframe
        src={source}
        title="PhysioPraxis Marian"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
    </div>
  );
};

export default MapLocation;
