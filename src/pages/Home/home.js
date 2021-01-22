import React, { Fragment } from "react";
import "./home.css";

import { connect } from "react-redux";

import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroSection from "../../components/HeroSection/heroSection";
import ProfessionalPreview from "../../components/ProfessionalPreview/professionalPreview";
import AppointmentContainer from "../../components/AppointmentContainer/appointmentContainer";
import MapContainer from "../../components/MapContainer/mapContainer";
import LoadingSpinner from "../../components/LoadingSpinner/loadingSpinner";


const Home = ({ homeContent, testimonials }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PhysioPraxis Marian | Home</title>
        <meta
          name="description"
          content="Ich bin Marian, Ihr Therapeut und Partner für Ihren Gesundungsprozess. Mit einer Erfahrung von über 12 Jahren in der Physiotherapie, biete ich höchste Qualität in der Behandlung und körperlichen Heilung jedes Patienten."
        />
      </Helmet>
      {homeContent && testimonials ? (
        <Fragment>
          <HeroSection homeContent={homeContent} />
          <ProfessionalPreview homeContent={homeContent} />
          <AppointmentContainer testimonials={testimonials} />
          <MapContainer homeContent={homeContent} />
        </Fragment>
      ) : (
        <LoadingSpinner />
      )}
    </HelmetProvider>
  );
};
const mapStateToProps = (state) => {
  return {
    homeContent: state.userReducer.homeContent,
    testimonials: state.userReducer.testimonials,
  };
};
export default connect(mapStateToProps)(Home);
