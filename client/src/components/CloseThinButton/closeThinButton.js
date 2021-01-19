import React from "react";
import "./closeThinButton.css";
import {connect} from "react-redux";
import {leaveMessageStatusChange} from "../../redux/redux-actions";
import CloseThin from "../../assets/iconmonstr-x-thin.png";

const CloseThinButton = ({dispatch, leaveMessageStatus}) => {

  const handleClick = () => {
    dispatch(leaveMessageStatusChange(!leaveMessageStatus))
  };

  return (
    <img
      onClick={handleClick}
      className="closeThin"
      src={CloseThin}
      alt="up arrow icon"
      role="button"
      style={leaveMessageStatus ? { display: "initial" } : { display: "none" }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    leaveMessageStatus: state.userReducer.leaveMessageStatus,
  };
};

export default connect(mapStateToProps)(CloseThinButton);
