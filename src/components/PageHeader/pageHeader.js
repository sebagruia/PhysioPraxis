import React from "react";
import "./pageHeader.css";
import { connect } from "react-redux";

const PageHeader = ({ children, leaveMessageStatus }) => {

  return (
    <div className="page-header container-fluid">
      <div className={`page-title container ${leaveMessageStatus ? "page-title-transition" : ""}`}>
        <h1>{children}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    leaveMessageStatus: state.userReducer.leaveMessageStatus,
  };
};

export default connect(mapStateToProps)(PageHeader);
