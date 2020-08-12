import React from "react";
import "./socials.css";
import Facebook from "../../assets/iconmonstr-facebook.png";
import Instagram from "../../assets/iconmonstr-instagram.png";
import Twitter from "../../assets/iconmonstr-twitter.png";

const Socials = () => {
  return (
    <div className="infoTable-social-container">
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
  );
};

export default Socials;
