import React from "react";
import "./home.css";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HeroSection from "../../components/HeroSection/heroSection";
import ProfessionalPreview from "../../components/ProfessionalPreview/professionalPreview";
import AppointmentContainer from "../../components/AppointmentContainer/appointmentContainer";
import MapContainer from "../../components/MapContainer/mapContainer";

const Home = ({ homeContent, testimonialsHome }) => {
  console.log(homeContent);
  console.log(testimonialsHome);

  const homePageContent = homeContent.fields;
  const testimonials = testimonialsHome.items;
  return (
    <HelmetProvider>
      <Helmet>
        <title>PhysioPraxis Marian | Home</title>
        <meta
          name="description"
          content="Ich bin Marian, Ihr Therapeut und Partner für Ihren Gesundungsprozess. Mit einer Erfahrung von über 12 Jahren in der Physiotherapie, biete ich höchste Qualität in der Behandlung und körperlichen Heilung jedes Patienten."
        />
      </Helmet>
      <HeroSection homePageContent={homePageContent} />
      <ProfessionalPreview homePageContent={homePageContent} />
      <AppointmentContainer testimonials={testimonials} />
      <MapContainer homePageContent={homePageContent}/>
    </HelmetProvider>
  );
};
const mapStateToProps = (state) => {
  return {
    homeContent: state.userReducer.homeContent,
    testimonialsHome: state.userReducer.testimonialsHome,
  };
};
export default connect(mapStateToProps)(Home);
