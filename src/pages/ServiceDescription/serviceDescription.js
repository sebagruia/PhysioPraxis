import React from "react";
import "./serviceDescription.css";
import { withRouter } from "react-router-dom";
import ArrowBackButton from "../../components/ArrowBackButton/arrowBackButton";

const ServiceDescription = ({ history }) => {
  const { service, label, description} = history.location.state;
  return (
    <div className="serviceDescription container-fluid">
      <div className="serviceDescription-container container">
      <ArrowBackButton />
        <div className="serviceDescription-img-container">
          <img src={service} alt="services" />
        </div>
        <div className="serviceDescription-description-container">
          <h1>{label}</h1>
          <p>
           {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ServiceDescription);
