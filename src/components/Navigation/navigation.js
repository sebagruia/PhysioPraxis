import React, { useState } from "react";
import "./navigation.css";

import { connect } from "react-redux";
import { leaveMessageStatusChange } from "../../redux/redux-actions";

import {withRouter , NavLink } from "react-router-dom";
import { Helmet, HelmetProvider  } from "react-helmet-async";
import { Link as ScrollLink } from "react-scroll";


import LeaveAMessageForm from "../LeaveAMessageForm/leaveAMessageForm";
import Hamburger from "../Hamburger/hamburger";
import LeaveAMessageButton from "../LeaveAMessageButton/leaveAMessageButton";
import UserButton from "../UserButton/userButton";
import Logo from "../Logo/logo";
// import LanguageButton from "../LanguageButton/languageButton";
import InfoTable from "../InfoTable/infoTable";

import Clock from "../../assets/iconmonstr-time-2.png";
import Phone from "../../assets/iconmonstr-smartphone.png";
import LocationIcon from "../../assets/iconmonstr-location.png";
import Hand from "../../assets/iconmonstr-direction.png";
import Facebook from "../../assets/iconmonstr-facebook.png";
import Instagram from "../../assets/iconmonstr-instagram.png";
import Twitter from "../../assets/iconmonstr-twitter.png";

const Navigation = ({ history, dispatch, currentUser, leaveMessageStatus }) => {
  
  const [active, setActivate] = useState(false);
  const [InfoTableOn, setInfoTableOn] = useState(false);

  const { pathname } = history.location;

  const handleHamburgerMenu = () => {
    if(window.innerWidth < 1218){
      setActivate(!active);
      dispatch(leaveMessageStatusChange(true));
    }
  };

  const handleInfoTable = () => {
    setInfoTableOn(!InfoTableOn);
  };

  const activeClass = {
    opacity: 1,
    color: "#003a45",
    fontWeight: "700",
    textDecoration: "underline",
  };

  return (
    <HelmetProvider>
    <div className="container-fluid navigation">
      <Helmet>
        <html className={active ? "preventScroll" : ""}></html>
      </Helmet>
      <Hamburger handleHamburgerMenu={handleHamburgerMenu} active={active} />
      <div className="navInfo-container container-xl">
        <Logo />
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
              <h6 className="firstText">Termine nach Vereinbarung</h6>
              <h6 className="subText">Sonntag Geschlossen</h6>
            </div>
          </div>

          <div className="phone">
            <div className="phone-container">
              <img src={Phone} alt="phone" />
            </div>
            <div className="info">
              <h6 className="firstText">0172 3465 694</h6>
              <h6 className="subText">physiopraxis.marian@gmail.com</h6>
            </div>
          </div>

          <div className="location">
            <div className="location-container">
              <img src={LocationIcon} alt="location" />
            </div>
            <div className="info">
              <h6 className="firstText">Bismarckstr. 41</h6>
              <h6 className="subText">Darmstadt 64293</h6>
            </div>
          </div>

          <div className="hand">
            <div className="hand-container">
              <img src={Hand} alt="hand" />
            </div>
            <div className="info">
              <h6 className="firstText">Folgen Sie uns</h6>
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
              Über uns
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
              Leistungen
            </NavLink>

            <NavLink
              to="/news"
              activeStyle={activeClass}
              onClick={handleHamburgerMenu}
            >
              Aktuelles
            </NavLink>

            {pathname !== "/" ? (
              <NavLink
                to="/appointmentPage"
                onClick={handleHamburgerMenu}
                activeStyle={activeClass}
              >
                Termin vereinbaren
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
                Termin vereinbaren
              </ScrollLink>
            )}
          </ul>

          <div className="menu-buttons">
            <LeaveAMessageButton />
            <div className="language-and-user-container">
              {/* <LanguageButton /> */}
              <UserButton currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
      <LeaveAMessageForm leaveMessageStatus={leaveMessageStatus} />
    </div>
    </ HelmetProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    leaveMessageStatus: state.userReducer.leaveMessageStatus,
  };
};

export default withRouter(connect(mapStateToProps)(Navigation));
