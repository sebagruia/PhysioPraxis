import React from "react";
import "./additionalInfoButton.css";
import ArrowRight from "../../assets/iconmonstr-arrow-right.png"
import ArrowLeft from "../../assets/iconmonstr-arrow-left.png"

const AdditionalInfoButton = ({handleDisplay, display})=>{
    return(
        <div className="additionalInfoButton" onClick={handleDisplay} role="button">
            <img src={display ? ArrowRight  : ArrowLeft} alt="arrow icon" />
        </div>
    );
}

export default AdditionalInfoButton;