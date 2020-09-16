import React, { useEffect, useRef } from "react";
import "./pageHeader.css";
import { connect } from "react-redux";

const PageHeader = ({ children, leaveMessageStatus }) => {
  const refToPageHeader = useRef(null);

  useEffect(() => {
    refToPageHeader.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  return (
    <div className="page-header container-fluid" ref={refToPageHeader}>
      <div
        className={`page-title container ${
          leaveMessageStatus ? "page-title-transition" : ""}`}>
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
