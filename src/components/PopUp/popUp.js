import React from "react";
import "./popUp.css";
import { connect } from "react-redux";
import { sendingMessageStatus } from "../../redux/redux-actions";

const PopUp = ({ dispatch, children, bookingMessageStatus }) => {

  if (bookingMessageStatus) {
    setTimeout(
      () => dispatch(sendingMessageStatus(bookingMessageStatus)),
      3000
    );
  }

  return (
    <div
      className={`popup-container `}
      role="button"
      style={
        !bookingMessageStatus
          ? { visibility: "hidden" }
          : { visibility: "visible" }
      }
    >
      <p>{children}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookingMessageStatus: state.userReducer.bookingMessageStatus,
  };
};

export default connect(mapStateToProps)(PopUp);
