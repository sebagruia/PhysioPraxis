import React from "react";
import "./services.css";
import { columnImageContainerContentArray } from "../../DATA";
import ColumnImageContainer from "../../components/ColumnImageContainer/columnImageContainer";
import PageHeader from "../../components/PageHeader/pageHeader";

const Services = () => {
  return (
    <div className="container-fluid services">
      <PageHeader>Services</PageHeader>
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
