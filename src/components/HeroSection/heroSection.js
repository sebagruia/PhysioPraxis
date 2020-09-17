import React from "react";
import "./heroSection.css";

const HeroSection = ()=>{
    return (
        <div className="container-fluid hero-section">
        <div className="hero-img">
          <div className="container hero-img-title-container">
            <div className="full-title" lang="de">
              <div className="background-for-text">
                <h1 className="hero-img-title">
                  Praxis<span className="hero-img-title-span"> für</span>
                </h1>
              </div>
              <div className="background-for-text">
                <h1 className="hero-img-title">Physiotherapie</h1>
              </div>
              <div className="moto">
                <h6 className="moto-text">QUALITÄT</h6>
                <h6 className="moto-text">RESPEKT</h6>
                <h6 className="moto-text">INNOVATION</h6>
              </div>
            </div>
          </div>
        </div>
        <div className=" container hero-description">
          <div className="box box1">
            <div className="boxTitle">
              <h4>Professional Physiotherapist</h4>
            </div>
            <div className="boxTitle-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed massa diam sed est
                vitae eget dolor et, turpis
              </p>
            </div>
          </div>
          <div className="box box2">
            <div className="boxTitle boxTitle-box2">
              <h4>Insurance Partner</h4>
            </div>
            <div className="boxTitle-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed massa diam sed est
                vitae eget dolor et, turpis
              </p>
            </div>
            <div className="boxTitle boxTitle-box2">
              <h4>Insurance Partner</h4>
            </div>
          </div>
          <div className="box box3">
            <div className="boxTitle">
              <h4>Affordable Prices</h4>
            </div>
            <div className="boxTitle-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed massa diam sed est
                vitae eget dolor et, turpis
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}


export default HeroSection;