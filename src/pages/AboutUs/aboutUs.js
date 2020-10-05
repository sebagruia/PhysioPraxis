import React from "react";
import "./aboutUs.css";
import {withRouter} from "react-router-dom";
import AboutUsWorkinHours from "../../components/AboutUsWorkinHours/aboutUsWorkingHours";
import Socials from "../../components/Socials/socials";
import BootstrapCarousel from "../../components/BootstrapCarousel/bootstrapCarousel";
import Facebook from "../../assets/iconmonstr-facebook.png";
import Instagram from "../../assets/iconmonstr-instagram.png";
import Twitter from "../../assets/iconmonstr-twitter.png";

const AboutUs = () => {
  return (
    <div className="container-fluid aboutUs">
      <div className="header">
     
      </div>
      <div className="aboutUs-presentation container">
        <AboutUsWorkinHours />
        <div className="aboutUs-text">
        
          <div className="aboutUs-text-shortPresentation">
            <hr className="aboutUs-text-hr"></hr>
            <h6>
            Ich bin Marian, Ihr Therapeut und Partner für Ihren Gesundungsprozess.
            Mit einer Erfahrung von über 10 Jahren in der Physiotherapie biete ich höchste Qualität in der Behandlung und körperlichen Heilung jedes Patienten.
            </h6>
            <hr className="aboutUs-text-hr"></hr>
          </div>
          <div className="aboutUs-text-description">
            <div className="firstColumn">
            Durch jeden teilnehmenden Kurs, zusammen mit anderen Aktivitäten zur persönlichen Entwicklung, 
            bringe ich Innovation für die Patienten in jeder Therapiesitzung der Behandlung.
            Das Ziel der PHYSIOPRAXIS MARIAN ist, die Lebensqualität für jeden Patienten zu verbessern und die Faktoren zu beseitigen, 
            die ihm Unbehagen oder Schmerzen verursachen.

            </div>
            <div className="secondColumn">
            Das Ziel der PHYSIOPRAXIS MARIAN ist, die Lebensqualität für jeden Patienten zu verbessern und die Faktoren zu beseitigen, 
            die ihm Unbehagen oder Schmerzen verursachen.
            </div>
          </div>
          <hr className="aboutUs-text-hr"></hr>
          <Socials facebook={Facebook} instagram={Instagram} twitter={Twitter}/>
        </div>
      </div>
      <BootstrapCarousel />
    </div>
  );
};

export default withRouter(AboutUs);
