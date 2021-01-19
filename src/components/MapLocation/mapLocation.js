import React from "react";
import "./mapLocation.css";

const MapLocation = ({ homePageContent }) => {
  const source = homePageContent&&homePageContent.mapUrl.url;
  return (
    <div>
      {homePageContent && (
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
      )}
    </div>
  );
};

export default MapLocation;
