import React from "react";
import "./serviceDescription.css";
import { withRouter } from "react-router-dom";

const ServiceDescription = ({ history }) => {
  const { service, label } = history.location.state;
  return (
    <div className="serviceDescription container-fluid">
      <div className="serviceDescription-container container">
        <div className="serviceDescription-img-container">
          <img src={service} alt="services" />
        </div>
        <div className="serviceDescription-description-container">
          <h1>{label}</h1>
          <p>
            Four loko hoodie irony leggings typewriter schlitz actually gentrify
            taiyaki food truck biodiesel austin. Selvage forage mixtape neutra
            squid fam banh mi ennui organic, twee leggings XOXO migas prism
            messenger bag. 90's la croix bicycle rights fam brunch flannel tbh
            authentic hoodie. Pop-up stumptown pickled humblebrag. Four loko
            PBR&B fanny pack roof party next level master cleanse lomo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ServiceDescription);
