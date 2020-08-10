import React from "react";
import "./languageButton.css";
import ArrowLanguage from "../../assets/iconmonstr-arrow.png";

const LanguageButton = () => {
  return (
    <div className="language-button" role="button">
      <h6>DE</h6>
      <img src={ArrowLanguage} alt="arrow" />
    </div>
  );
};

export default LanguageButton;
