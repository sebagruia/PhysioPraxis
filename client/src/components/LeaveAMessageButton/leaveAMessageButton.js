import React from "react";
import "./leaveAMessageButton.css";
import {connect} from "react-redux";
import {leaveMessageStatusChange} from "../../redux/redux-actions";



const LeaveAMessageButton = ({dispatch,leaveMessageStatus}) => {

  const handleClick = () => {
    dispatch(leaveMessageStatusChange(!leaveMessageStatus))
  };
  return (
    <div onClick={handleClick} className="message-button" role="button">
      <h6>Nachricht hinterlassen</h6>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    leaveMessageStatus: state.userReducer.leaveMessageStatus,
  };
};

export default connect(mapStateToProps)(LeaveAMessageButton);
