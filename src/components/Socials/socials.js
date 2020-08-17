import React from "react";
import "./socials.css";


const Socials = ({facebook,instagram,twitter }) => {
  return (
    <div className="infoTable-social-container">
      <a href="https://www.facebook.com/physiopraxis.marian/">
        <img src={facebook} alt="facebook-icon" role="button" />
      </a>
      <a href="https://www.facebook.com/physiopraxis.marian/">
        <img src={instagram} alt="facebook-icon" role="button" />
      </a>
      <a href="https://www.facebook.com/physiopraxis.marian/">
        <img src={twitter} alt="facebook-icon" role="button" />
      </a>
    </div>
  );
};

export default Socials;
