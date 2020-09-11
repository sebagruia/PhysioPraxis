import React from "react";
import "./footer.css";
import Facebook from "../../assets/iconmonstr-facebook-white.png";
import Instagram from "../../assets/iconmonstr-instagram-white.png";
import Twitter from "../../assets/iconmonstr-twitter-white.png";
// import Logo from "../../assets/PhysiopraxisLogoOuterGlow.png";
import GitHub from "../../assets/iconmonstr-github.png";
import Socials from "../../components/Socials/socials";
import Phone from "../../assets/iconmonstr-phone.png";
import Mail from "../../assets/iconmonstr-email.png";
import Logo from "../Logo/logo";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className=" container footer-container">
        <div className="logo-footer">
          <Logo />
        </div>
        <div className="contactDetails">
          <div className="phone-details">
            <img src={Phone} alt="phone" />
            <h6>0172 2869619</h6>
          </div>
          <div className="email-details">
            <img src={Mail} alt="email" />
            <h6>physiopraxis.marian@gmail.com</h6>
          </div>
        </div>
        <div className="footer-details">
          <div className="footer-socials">
            <h6>
              <span>Copyright</span> Physiopraxis Marian
            </h6>
            <Socials
              facebook={Facebook}
              instagram={Instagram}
              twitter={Twitter}
            />
          </div>
          <div className="poweredBy">
            <h6>
              <span>Powered by</span> Sebastian Gruia
            </h6>
            <div className="github-container">
              <a href="https://sebagruia.github.io/SebastianGruia-Project-Page/">
                <img src={GitHub} alt="github icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
