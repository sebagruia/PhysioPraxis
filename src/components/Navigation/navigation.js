import React, { useState } from "react";
import "./navigation.css";
import LeaveAMessageForm from "../LeaveAMessageForm/leaveAMessageForm";
import Hamburger from "../Hamburger/hamburger";
import { NavLink, useHistory} from "react-router-dom";
import LanguageButton from "../LanguageButton/languageButton";
import Logo from "../../assets/PhysiopraxisLogoShadow.png";
import Clock from "../../assets/iconmonstr-time-2.png";
import Phone from "../../assets/iconmonstr-smartphone.png";
import LocationIcon from "../../assets/iconmonstr-location.png";
import Hand from "../../assets/iconmonstr-direction.png";
import Facebook from "../../assets/iconmonstr-facebook.png";
import Instagram from "../../assets/iconmonstr-instagram.png";
import Twitter from "../../assets/iconmonstr-twitter.png";
import InfoTable from "../InfoTable/infoTable";
import LeaveAMessageButton from "../LeaveAMessageButton/leaveAMessageButton";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const [active, setActivate] = useState(false);
  const [InfoTableOn, setInfoTableOn] = useState(false);
  const [leaveMessageOn, setleaveMessageOn] = useState(false);

  const history = useHistory();
  const{pathname} = history.location;

  const handleHamburgerMenu = () => {
    setActivate(!active);
    setleaveMessageOn(false);
    if(pathname !== "/"){
      history.push('/')
    }
   
  };

  const handleInfoTable = () => {
    setInfoTableOn(!InfoTableOn);
  };

  const handleLeaveAMessageButton = () => {
    setleaveMessageOn(!leaveMessageOn);
  };

  return (
    <div className="container-fluid navigation">
      <Hamburger handleHamburgerMenu={handleHamburgerMenu} active={active} />
      <div
        className="navInfo-container container-xl"
        style={active ? { display: "none" } : { display: "flex" }}
      >
        <div className="logo">
          <img className="logo-img" src={Logo} alt="logo" />
          <div className="logo-text">
            <h6>PhysioPraxis</h6>
            <h6>Marian</h6>
          </div>
        </div>

        <InfoTable
          handleInfoTable={handleInfoTable}
          InfoTableOn={InfoTableOn}
        />
        <div className="praxisInfo">
          <div className="schedule">
            <div className="clock-container">
              <img src={Clock} alt="clock" />
            </div>
            <div className="info">
              <h6 className="firstText">
                Monday - Friday <span className="hours">08:00 - 19:00</span>
              </h6>
              <h6 className="subText">
                Saturday <span className="hours">08:00 -14:00</span>, Sunday
                Closed
              </h6>
            </div>
          </div>

          <div className="phone">
            <div className="phone-container">
              <img src={Phone} alt="phone" />
            </div>
            <div className="info">
              <h6 className="firstText">0172 2869619</h6>
              <h6 className="subText">physiopraxis.marian@gmail.com</h6>
            </div>
          </div>

          <div className="location">
            <div className="location-container">
              <img src={LocationIcon} alt="location" />
            </div>
            <div className="info">
              <h6 className="firstText">Nibelungenstrasse 42</h6>
              <h6 className="subText">Crumstadt, Hessen, Germany</h6>
            </div>
          </div>

          <div className="hand">
            <div className="hand-container">
              <img src={Hand} alt="hand" />
            </div>
            <div className="info">
              <h6 className="firstText">Follow Us</h6>
              <div className="social-container">
                <a href="https://www.facebook.com/physiopraxis.marian/">
                  <img src={Facebook} alt="facebook-icon" role="button" />
                </a>
                <a href="https://www.facebook.com/physiopraxis.marian/">
                  <img src={Instagram} alt="facebook-icon" role="button" />
                </a>
                <a href="https://www.facebook.com/physiopraxis.marian/">
                  <img src={Twitter} alt="facebook-icon" role="button" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`navMenu ${active ? "navMenuMobile" : ""}`}>
        <div className="container-xl navMenu-content">
          <ul className="menu">
            <li onClick={handleHamburgerMenu}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={handleHamburgerMenu}>
              <NavLink to="/aboutUs">About us</NavLink>
            </li>
            <li onClick={handleHamburgerMenu} style={{ display: "none" }}>
              Team
            </li>
            <li onClick={handleHamburgerMenu}>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li onClick={handleHamburgerMenu}>News</li>
            <li onClick={handleHamburgerMenu}>
              <ScrollLink
                to="scroll-to-appointment"
                spy={true}
                smooth={true}
                offset={20}
                duration={1000}
              >
                Appointment
              </ScrollLink>
            </li>
          </ul>
          <div className="menu-buttons">
            <LeaveAMessageButton
              handleLeaveAMessageButton={handleLeaveAMessageButton}
            />
            <LanguageButton />
          </div>
        </div>
      </div>
      <LeaveAMessageForm
        handleLeaveAMessageButton={handleLeaveAMessageButton}
        leaveMessageOn={leaveMessageOn}
      />
    </div>
  );
};

export default Navigation;
