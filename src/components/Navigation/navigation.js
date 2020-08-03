import React from "react";
import "./navigation.css";
import Logo from "../../assets/PhysiopraxisLogoShadow.png";
import Clock from "../../assets/iconmonstr-time-2.png";
import Phone from "../../assets/iconmonstr-smartphone.png";
import LocationIcon from "../../assets/iconmonstr-location.png";
import Hand from "../../assets/iconmonstr-direction.png";
import Facebook from "../../assets/iconmonstr-facebook.png";
import Instagram from "../../assets/iconmonstr-instagram.png";
import Twitter from "../../assets/iconmonstr-twitter.png";
import ArrowLanguage from "../../assets/iconmonstr-arrow.png";

const Navigation = () => {
  return (
    <div className="container-fluid navigation">
      <div className="navInfo-container container">
        <div className="logo">
          <img className="logo-img" src={Logo} alt="logo" />
          <div className="logo-text">
            <h6>PhysioPraxis</h6>
            <h6>Marian</h6>
          </div>
        </div>
        <div className="praxisInfo">
          <div className="schedule">
            <div className="clock-container">
              <img src={Clock} alt="clock" />
            </div>
            <div className="info">
              <h6 className="firstText">
                Monday - Friday <span className="hours">08:00 - 19:00</span>
              </h6>
              <h6 className="subText">Sunday Closed</h6>
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
                <img src={Facebook} alt="facebook-icon" role="button" />
                <img src={Instagram} alt="facebook-icon" role="button" />
                <img src={Twitter} alt="facebook-icon" role="button" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navMenu">
        <div className="container navMenu-content">
          <ul className="menu">
            <li>Home</li>
            <li>About us</li>
            <li>Team</li>
            <li>Services</li>
            <li>News</li>
            <li>Appointment</li>
          </ul>
          <div className="menu-buttons">
            <div className="message-button" role="button">
              <h6>Leave a Message</h6>
            </div>
            <div className="language-button" role="button">
              <h6>DE</h6>
              <img src={ArrowLanguage} alt="arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
