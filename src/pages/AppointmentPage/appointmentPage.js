import React from "react";
import "./appointmentPage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BookingForm from "../../components/BookingForm/bookingForm";

const AppointmentPage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Praxis für Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibuläre Dysfunktionen Heiß- und Kalttherapie"
        />
        <title>PhysioPraxis Marian | Termin vereinbaren</title>
      </Helmet>
      <div className="appointmentPage-container container">
        <BookingForm />
        <div className="appointmentPage-contactInfo">
          <div className="appointmentPage-contactInfo-text" lang="de">
            <h1>Kontakt</h1>
            <div className="appointmentPage-firstText-container">
              <h6 className="appointmentPage-firstText">MONTAG - FREITAG </h6>
              <h6 className="appointmentPage-hours">08:00 - 19:00</h6>
            </div>

            <div className="appointmentPage-firstText-container">
              <h6 className="appointmentPage-firstText">SAMSTAG </h6>
              <h6 className="appointmentPage-hours">08:00 - 14:00</h6>
            </div>

            <div className="appointmentPage-firstText-container">
              <h6 className="appointmentPage-firstText">SONNTAG </h6>
              <h6 className="appointmentPage-hours">GESCHLOSSEN</h6>
            </div>

            <div className="appointmentPage-firstText-container">
              <h6 className="appointmentPage-firstText">TEL. / WHATSAPP</h6>
              <h6 className="appointmentPage-hours">0172 3465694</h6>
            </div>

            <div className="appointmentPage-firstText-container">
              <h6 className="appointmentPage-firstText">EMAIL </h6>
              <h6 className="appointmentPage-hours">
                physiopraxis.marian@gmail.com
              </h6>
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AppointmentPage;
