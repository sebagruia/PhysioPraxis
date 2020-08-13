import React from "react";
import "./services.css";
import { columnImageContainerContentArray } from "../../utils";
import ColumnImageContainer from "../../components/ColumnImageContainer/columnImageContainer";

const Services = () => {
  return (
    <div className="container-fluid services">
      <div className="services-header container-fluid">
        <div className="services-title container">
          <h1>Services</h1>
        </div>
      </div>
      <div className="services-container container">
        {Object.values(columnImageContainerContentArray).map((column) => (
          <ColumnImageContainer
            key={column.id}
            service={column.img}
            label={column.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
