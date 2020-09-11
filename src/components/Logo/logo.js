import React from "react";
import "./logo.css";
import LogoImage from "../../assets/PhysiopraxisLogoShadow.png";


const Logo = ()=>{
    return(
        <div className="logo">
        <img className="logo-img" src={LogoImage} alt="logo" />
        <div className="logo-text">
          <h6>PhysioPraxis</h6>
          <h6>Marian</h6>
        </div>
      </div>
    );
}

export default Logo;