import React from "react";
import "./services.css";
import { services } from "../../DATA";
import ColumnImageContainer from "../../components/ColumnImageContainer/columnImageContainer";
import PageHeader from "../../components/PageHeader/pageHeader";

const Services = () => {
  return (
    <div className="container-fluid services">
      <PageHeader>Services</PageHeader>
      <div className="services-container container">
        {Object.values(services).map((service) => (
          <ColumnImageContainer
            key={service.id}
            service={service.img}
            label={service.label}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
