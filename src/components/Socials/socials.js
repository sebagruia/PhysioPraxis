import React from "react";
import "./socials.css";

const Socials = ({ facebook, instagram, twitter, aboutUs }) => {
  return (
    <>
      {aboutUs ? (
        <div className="infoTable-social-container">
          <a href={aboutUs.fields.socialsLinks.facebook}>
            <img src={facebook} alt="facebook-icon" role="button" />
          </a>
          <a href={aboutUs.fields.socialsLinks.instagram}>
            <img src={instagram} alt="facebook-icon" role="button" />
          </a>
          <a href={aboutUs.fields.socialsLinks.twitter}>
            <img src={twitter} alt="facebook-icon" role="button" />
          </a>
        </div>
      ) : null}
    </>
  );
};

export default Socials;
