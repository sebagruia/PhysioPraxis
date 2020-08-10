import React from "react";
import "./closeThinButton.css";
import CloseThin from "../../assets/iconmonstr-x-thin.png";

const CloseThinButton = ({ handleLeaveAMessageButton, leaveMessageOn }) => {
  return (
    <img
      onClick={handleLeaveAMessageButton}
      className="closeThin"
      src={CloseThin}
      alt="up arrow icon"
      role="button"
      style={leaveMessageOn ? { display: "initial" } : { display: "none" }}
    />
  );
};

export default CloseThinButton;
