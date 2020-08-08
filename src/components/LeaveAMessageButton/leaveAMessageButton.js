import React from "react";
import "./leaveAMessageButton.css";

const LeaveAMessageButton = ({handleLeaveAMessageButton}) => {
  return (
    <div onClick={handleLeaveAMessageButton} className="message-button" role="button">
      <h6>Leave a Message</h6>
    </div>
  );
};

export default LeaveAMessageButton;
