import React from "react";
import "./arrowBackButton.css";
import ArrowBackThick from "../../assets/iconmonstr-arrow-back-thick.png";
import { useHistory } from "react-router-dom";

const ArrowBAckButton = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };
  return (
    <img
      onClick={handleClick}
      src={ArrowBackThick}
      alt="arrow-back"
      className="arrow-back-thick-up"
      role="button"
    />
  );
};

export default ArrowBAckButton;
