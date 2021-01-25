import React from "react";
import "./services.css";

import { connect } from "react-redux";

import { Helmet, HelmetProvider } from "react-helmet-async";
import ColumnImageContainer from "../../components/ColumnImageContainer/columnImageContainer";
import PageHeader from "../../components/PageHeader/pageHeader";
import LoadingSpinner from "../../components/LoadingSpinner/loadingSpinner";

const Services = ({ services }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PhysioPraxis Marian | Leistungen</title>
        <meta
          name="description"
          content="Praxis für Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibuläre Dysfunktionen Heiß- und Kalttherapie."
        />
      </Helmet>
      <div className="container-fluid services">
        <PageHeader>Leistungen</PageHeader>
        {services ? (
          <div className="services-container container">
            {services.items.map((service) => (
              <ColumnImageContainer
                service={service}
                key={service.sys.id}
                label={service.label}
                description={service.description}
              />
            ))}
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </HelmetProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    services: state.userReducer.services,
  };
};

export default connect(mapStateToProps)(Services);
