import React from "react";
import "./aboutUsWorkingHours.css";
import Doctor from "../../assets/doctor1.png";
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
        <img src={Doctor} alt="doctor" />
      </div>

      <div className="aboutUsWorkingHours-hours">
        <h5>Working Hours</h5>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Monday</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Tuesday</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Wednesday</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Thursday</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Friday</h6>
            <p>8:00 - 19:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Saturday</h6>
            <p>8:00 - 14:00</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>Sunday</h6>
            <p>Closed</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
      </div>
      
      <div className="aboutUsWorkingHours-contactDetails">
      <p className="contactMarian">Contact Marian</p>
        <h5>contact details</h5>
        <div className="phone-details">
          <img src={Phone} alt="phone" />
          <h6>0172 2869619</h6>
        </div>
        <div className="contact-details">
          <img src={Mail} alt="email" />
          <h6>physiopraxis.marian@gmail.com</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUsWorkinHours;
