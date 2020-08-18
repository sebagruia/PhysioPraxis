import React, { useState } from "react";
import "./navigation.css";
import LeaveAMessageForm from "../LeaveAMessageForm/leaveAMessageForm";
import Hamburger from "../Hamburger/hamburger";
import { NavLink, useHistory } from "react-router-dom";
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
  const { pathname } = history.location;

  const handleHamburgerMenu = () => {
    setActivate(!active);
    setleaveMessageOn(false);
  };

  const handleInfoTable = () => {
    setInfoTableOn(!InfoTableOn);
  };

  const handleLeaveAMessageButton = () => {
    setleaveMessageOn(!leaveMessageOn);
  };

  const activeClass = {
    opacity: 1,
    color: "#003a45",
    fontWeight: "700",
    textDecoration: "underline",
  };

  return (
    <div className="container-fluid navigation">
      <Hamburger handleHamburgerMenu={handleHamburgerMenu} active={active} />
      <div className="navInfo-container container-xl">
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
            <NavLink
              exact
              to="/"
              onClick={handleHamburgerMenu}
              activeStyle={activeClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/aboutUs"
              onClick={handleHamburgerMenu}
              activeStyle={activeClass}
            >
              About us
            </NavLink>

            <NavLink
              to="/team"
              onClick={handleHamburgerMenu}
              activeStyle={activeClass}
              style={{ display: "none" }}
            >
              Team
            </NavLink>

            <NavLink
              to="/services"
              activeStyle={activeClass}
              onClick={handleHamburgerMenu}
            >
              Services
            </NavLink>

            <NavLink
              to="/news"
              activeStyle={activeClass}
              onClick={handleHamburgerMenu}
            >
              News
            </NavLink>

            {pathname !== "/" ? (
              <NavLink
                to="/appointmentPage"
                onClick={handleHamburgerMenu}
                activeStyle={activeClass}
              >
                Appointment
              </NavLink>
            ) : (
              <ScrollLink
                to="scroll-to-appointment"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={handleHamburgerMenu}
              >
                Appointment
              </ScrollLink>
            )}
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