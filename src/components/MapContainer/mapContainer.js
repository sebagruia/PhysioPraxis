import React, {useState} from "react";
import "./mapContainer.css";
import MapLocation from "../../components/MapLocation/mapLocation";
import AdditionalInfoButton from "../../components/AdditionalInfoButton/additionalInfoButton";


const MapContainer = ()=>{
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
      setDisplay(!display);
    };
  
    return(
        <div className="container-fluid map">
        <MapLocation />
        <AdditionalInfoButton handleDisplay={handleDisplay} display={display} />
        <div
          className="additionalInfo"
          style={display ? { display: "flex" } : { display: "none" }}
        >
          <div className="weg">
            <ul>
              <h5>WEGBESCHREIBUNG</h5>
              <h6>Parkmöglichkeiten</h6>
              <li>2 patienten Parkplätze stehen zur Verfügung</li>
            </ul>
            <ul>
              <h6>Mit öffentlichen Verkersmittel</h6>
              <p>Haltestelle:</p>
              <li>Klinikum(150m)</li>
              <li>Kasinostr.(150m)</li>
              <li>Rhein-/Neckarstr. (500m)</li>
              <li>Willy-Brandt-Platz (350m)</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default MapContainer;

