import React, { Fragment } from "react";
import "./home.css";
import HeroSection from "../../components/HeroSection/heroSection";
import ProfessionalPreview from "../../components/ProfessionalPreview/professionalPreview";
import AppointmentContainer from "../../components/AppointmentContainer/appointmentContainer";
import MapContainer from "../../components/MapContainer/mapContainer";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <ProfessionalPreview />
      <AppointmentContainer />
      <MapContainer />
    </Fragment>
  );
};

export default Home;
