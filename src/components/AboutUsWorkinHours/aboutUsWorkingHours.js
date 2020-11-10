import React from "react";
import "./aboutUsWorkingHours.css";
import Phone from "../../assets/iconmonstr-phone-blue.png";
import Mail from "../../assets/iconmonstr-email-blue.png";

const AboutUsWorkinHours = () => {
  return (
    <div className="aboutUsWorkingHours">
       <div className="title-container">
            <h1 className="header-title">PHYSIOPRAXIS MARIAN</h1>
          </div>
      <div className="aboutUsWorkingHours-img-container">
        <img src='https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/home%2FMarian_change_color.png?alt=media&token=e781efc4-13c1-48fd-81f4-20fe2e6825cf' alt="doctor" />
      </div>

      <div className="aboutUsWorkingHours-hours" lang="de">
        <h5>Öffnungszeiten</h5>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Montag</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Dienstag</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Mittwoch</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Donnerstag</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Freitag</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Samstag</h6>
            <p>8:00 - 14:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Sonntag</h6>
            <p>Geschlossen </p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
      </div>
      
      <div className="aboutUsWorkingHours-contactDetails">
        <h5>Kontakt</h5>
        <div className="aboutUsWorkingHours-phone-details">
          <img src={Phone} alt="phone" />
          <h6>0172 3465694</h6>
        </div>
        <div className="aboutUsWorkingHours-contact-details">
          <img src={Mail} alt="email" />
          <h6>physiopraxis.marian@gmail.com</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUsWorkinHours;
