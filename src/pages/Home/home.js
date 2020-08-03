import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="container-fluid hero-section">
      <div className="hero-img"></div>
      <div className=" container hero-description">
        <div className="box box1">
          <div className="boxTitle">
            <h4>Professional Physiotherapist</h4>
          </div>
          <div className="boxTitle-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa
              diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed massa diam sed est vitae
              eget dolor et, turpis
            </p>
          </div>
        </div>
        <div className="box box2">
          <div className="boxTitle-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa
              diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed massa diam sed est vitae
              eget dolor et, turpis
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa
              diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed massa diam sed est vitae
              eget dolor et, turpis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
