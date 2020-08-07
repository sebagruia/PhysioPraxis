import React from "react";
import "./footer.css";
import Facebook from "../../assets/iconmonstr-facebook-white.png";
import Instagram from "../../assets/iconmonstr-instagram-white.png";
import Twitter from "../../assets/iconmonstr-twitter-white.png";
import Logo from "../../assets/PhysiopraxisLogoOuterGlow.png";
import GitHub from "../../assets/iconmonstr-github.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className=" container footer-container">
        <div className="copyright">
          <h6>Copyright Physiopraxis Marian</h6>
          <div className="footer-social">
            <img src={Facebook} alt="facebook icon" />
            <img src={Instagram} alt="facebook icon" />
            <img src={Twitter} alt="facebook icon" />
          </div>
        </div>
        <img className="logo-img" src={Logo} alt="logo" />
        <div className="poweredBy">
          <h6>
            <span>Powered By</span> Sebastian Gruia
          </h6>
          <div className="github-container">
            <img src={GitHub} alt="github icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
