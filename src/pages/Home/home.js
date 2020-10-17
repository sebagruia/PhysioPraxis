import React from "react";
import "./home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroSection from "../../components/HeroSection/heroSection";
import ProfessionalPreview from "../../components/ProfessionalPreview/professionalPreview";
import AppointmentContainer from "../../components/AppointmentContainer/appointmentContainer";
import MapContainer from "../../components/MapContainer/mapContainer";

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Praxis für Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibuläre Dysfunktionen Heiß- und Kalttherapie"
        />
        <title>PhysioPraxis Marian | Home</title>
      </Helmet>
      <HeroSection />
      <ProfessionalPreview />
      <AppointmentContainer />
      <MapContainer />
    </HelmetProvider>
  );
};

export default Home;
