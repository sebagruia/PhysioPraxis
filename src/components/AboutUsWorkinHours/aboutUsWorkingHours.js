import React from "react";
import "./aboutUsWorkingHours.css";
import Phone from "../../assets/iconmonstr-phone-blue.png";
import Mail from "../../assets/iconmonstr-email-blue.png";

const AboutUsWorkinHours = ({aboutUs}) => {
  const {title, offnungszeiten} = aboutUs;
  return (
    <div className="aboutUsWorkingHours">
       <div className="title-container">
            <h1 className="header-title">{title}</h1>
          </div>
      <div className="aboutUsWorkingHours-img-container">
        <img src='https://firebasestorage.googleapis.com/v0/b/physiopraxis-6665a.appspot.com/o/home%2FMarian_change_color.png?alt=media&token=e781efc4-13c1-48fd-81f4-20fe2e6825cf' alt="doctor" />
      </div>

      <div className="aboutUsWorkingHours-hours" lang="de">
        <h5>{offnungszeiten.title}</h5>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>{offnungszeiten.montag.name}</h6>
            <p>{offnungszeiten.montag.hours}</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>{offnungszeiten.dienstag.name}</h6>
            <p>{offnungszeiten.dienstag.hours}</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>{offnungszeiten.mittwoch.name}</h6>
            <p>{offnungszeiten.mittwoch.hours}</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>{offnungszeiten.donnerstag.name}</h6>
            <p>{offnungszeiten.donnerstag.hours}</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>{offnungszeiten.freitag.name}</h6>
            <p>{offnungszeiten.freitag.hours}</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>{offnungszeiten.samstag.name}</h6>
            <p>{offnungszeiten.samstag.hours}</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
        <div className="aboutUsWorkingHours-day">
          <div className="aboutUsWorkingHours-day-text">
            <h6>{offnungszeiten.sonntag.name}</h6>
            <p>{offnungszeiten.sonntag.hours}</p>
          </div>
          <hr className="aboutUsWorkingHours-hr"></hr>
        </div>
      </div>
      
      <div className="aboutUsWorkingHours-contactDetails">
        <h5>Kontakt</h5>
        <div className="aboutUsWorkingHours-phone-details">
          <img src={Phone} alt="phone" />
          <h6>{offnungszeiten.contact.tel}</h6>
        </div>
        <div className="aboutUsWorkingHours-contact-details">
          <img src={Mail} alt="email" />
          <h6>{offnungszeiten.contact.email}</h6>
        </div>
      </div>
    </div>
  );
};

export default AboutUsWorkinHours;
