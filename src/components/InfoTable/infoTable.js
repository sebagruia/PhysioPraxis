import React from "react";
import "./infoTable.css";
import { withRouter } from "react-router-dom";
import Clock from "../../assets/iconmonstr-time-2.png";
import Phone from "../../assets/iconmonstr-smartphone.png";
import LocationIcon from "../../assets/iconmonstr-location.png";
import HandLeft from "../../assets/iconmonstr-direction-left.png";
import Facebook from "../../assets/iconmonstr-facebook.png";
import Instagram from "../../assets/iconmonstr-instagram.png";
import Twitter from "../../assets/iconmonstr-twitter.png";
import Socials from "../Socials/socials";

const InfoTable = ({ history, handleInfoTable, InfoTableOn }) => {
  const { pathname } = history.location;

  return (
    <div
      onClick={handleInfoTable}
      className={`infoTable ${pathname !== "/" ? "not-visible" : ""}`}
      style={
        InfoTableOn
          ? { transform: "translateX(0px)" }
          : { transform: "translateX(-250px)" }
      }
    >
      <div className="infoTable-schedule">
        <div className="infoTable-info">
          <h6 className="infoTable-firstText">Termine nach Vereinbarung</h6>
          <h6 className="infoTable-subText">Sonntag Geschlossen</h6>
        </div>
        <div className="infoTable-clock-container">
          <img src={Clock} alt="clock" />
        </div>
      </div>

      <div className="infoTable-phone">
        <div className="infoTable-info">
          <h6 className="infoTable-firstText">0172 3465694</h6>
          <h6 className="infoTable-subText">physiopraxis.marian@gmail.com</h6>
        </div>
        <div className="infoTable-phone-container">
          <img src={Phone} alt="phone" />
        </div>
      </div>

      <div className="infoTable-location">
        <div className="infoTable-info">
          <h6 className="infoTable-firstText">Bismarckstr. 41</h6>
          <h6 className="infoTable-subText">Darmstadt 64293 </h6>
        </div>
        <div className="infoTable-location-container">
          <img src={LocationIcon} alt="location" />
        </div>
      </div>

      <div className="infoTable-hand">
        <div className="infoTable-info">
          <h6 className="infoTable-firstText">Folgen Sie uns</h6>
          <Socials
            facebook={Facebook}
            instagram={Instagram}
            twitter={Twitter}
          />
        </div>
        <div className="infoTable-hand-container">
          <img src={HandLeft} alt="hand" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(InfoTable);
