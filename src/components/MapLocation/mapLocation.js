import React from "react";
import "./mapLocation.css";

const MapLocation = () => {
  const source =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5448.246349091457!2d8.64061512869887!3d49.8757086103428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd7089922aec0b%3A0xaff5833680c4d4f0!2sBismarckstra%C3%9Fe%2041%2C%2064293%20Darmstadt!5e0!3m2!1sen!2sde!4v1598708721195!5m2!1sen!2sde";
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
