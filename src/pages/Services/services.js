import React from "react";
import "./services.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { services } from "../../DATA";
import ColumnImageContainer from "../../components/ColumnImageContainer/columnImageContainer";
import PageHeader from "../../components/PageHeader/pageHeader";

const Services = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Praxis für Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibuläre Dysfunktionen Heiß- und Kalttherapie"
        />
        <title>PhysioPraxis Marian | Leistungen</title>
      </Helmet>
      <div className="container-fluid services">
        <PageHeader>Leistungen</PageHeader>
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
    </HelmetProvider>
  );
};

export default Services;
