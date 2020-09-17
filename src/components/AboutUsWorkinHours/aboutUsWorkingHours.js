import React from "react";
import "./aboutUsWorkingHours.css";
import Phone from "../../assets/iconmonstr-phone-blue.png";
import Mail from "../../assets/iconmonstr-email-blue.png";

const AboutUsWorkinHours = () => {
  return (
    <div className="aboutUsWorkingHours">
       <div className="title-container">
            <h6>PhysioTherapis</h6>
            <h1 className="header-title">Marian Popescu</h1>
          </div>
      <div className="aboutUsWorkingHours-img-container">
        <img src='https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/home%2Fdoctor1.png?alt=media&token=0ae9fe55-57e9-42ef-abc7-86bc84a8833d' alt="doctor" />
      </div>

      <div className="aboutUsWorkingHours-hours" lang="de">
        <h5>Arbeitszeit</h5>
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
            <p>Closed</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
      </div>
      
      <div className="aboutUsWorkingHours-contactDetails">
      <p className="contactMarian">Contact Marian</p>
        <h5>contact details</h5>
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
