import React from "react";
import "./footer.css";
import Facebook from "../../assets/iconmonstr-facebook-white.png";
import Instagram from "../../assets/iconmonstr-instagram-white.png";
import Twitter from "../../assets/iconmonstr-twitter-white.png";
import Logo from "../../assets/PhysiopraxisLogoOuterGlow.png";
import GitHub from "../../assets/iconmonstr-github.png";
import Socials from "../../components/Socials/socials";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className=" container footer-container">
        <div className="copyright">
          <h6>Copyright Physiopraxis Marian</h6>
          <Socials
            facebook={Facebook}
            instagram={Instagram}
            twitter={Twitter}
          />
        </div>
        <img className="logo-img" src={Logo} alt="logo" />
        <div className="poweredBy">
          <h6>
            <span>Powered By</span> Sebastian Gruia
          </h6>
          <div className="github-container">
            <a href="https://sebagruia.github.io/SebastianGruia-Project-Page/">
              <img src={GitHub} alt="github icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
