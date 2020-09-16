import React from "react";
import "./logo.css";
import LogoImage from "../../assets/PhysiopraxisLogoShadow.png";
import {Link} from "react-router-dom";


const Logo = ()=>{
    return(
        <Link to="/" className="logo">
        <img className="logo-img" src={LogoImage} alt="logo" />
        <div className="logo-text">
          <h6>PhysioPraxis</h6>
          <h6>Marian</h6>
        </div>
      </Link>
    );
}

export default Logo;