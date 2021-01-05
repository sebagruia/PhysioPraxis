import React from "react";
import "./popUp.css";
import { connect } from "react-redux";
import { sendingMessageStatusAction } from "../../redux/redux-actions";

const PopUp = ({ dispatch, children, messageStatus }) => {

  if (messageStatus) {
    setTimeout(
      () => dispatch(sendingMessageStatusAction(false)),
      2000
    );
  }

  return (
    <div
      className="popup-container"
      role="button"
      style={
        !messageStatus
          ? { visibility: "hidden" }
          : { visibility: "visible" }
      }
    >
      <p>{children}</p>
    </div>
  );
};


export default connect()(PopUp);
