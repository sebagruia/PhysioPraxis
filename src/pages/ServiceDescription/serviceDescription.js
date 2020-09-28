import React, {useEffect, useRef} from "react";
import "./serviceDescription.css";
import { withRouter } from "react-router-dom";
import Button from "../../components/Button/button";

const ServiceDescription = ({ history }) => {
  const refToServiceImg = useRef(null);

  useEffect(() => {
    refToServiceImg.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  const handleOnClick = ()=>{
    history.goBack();
  }

  const { service, label, description } = history.location.state;
  return (
    <div className="serviceDescription container-fluid" >
      <div className="serviceDescription-container container">
        <div className="serviceDescription-img-container"  ref={refToServiceImg}>
          <img src={service} alt="services" />
        </div>
        <div className="serviceDescription-description-container">
          <h1>{label}</h1>
          <p>{description}</p>
          <Button onClick={handleOnClick}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ServiceDescription);
