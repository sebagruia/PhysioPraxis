import React from "react";
import "./appointmentPage.css";
import BookingForm from "../../components/BookingForm/bookingForm";

const AppointmentPage = () => {

    
  return (
    <div className="appointmentPage-container container">
      <BookingForm  />
      <div className="appointmentPage-contactInfo">
        <div className="appointmentPage-contactInfo-text" lang="de">
          <h1>Contact</h1>
          <div className="appointmentPage-firstText-container">
            <h6 className="appointmentPage-firstText">
              MONTAG - FREITAG{" "}
            </h6>
            <h6 className="appointmentPage-hours">08:00 - 19:00</h6>
          </div>

          <div className="appointmentPage-firstText-container">
            <h6 className="appointmentPage-firstText">
            SAMSTAG{" "}
            </h6>
            <h6 className="appointmentPage-hours">08:00 - 14:00</h6>
          </div>

          <div className="appointmentPage-firstText-container">
            <h6 className="appointmentPage-firstText">
            SONNTAG{" "}
            </h6>
            <h6 className="appointmentPage-hours">GESCHLOSSEN</h6>
          </div>

          <div className="appointmentPage-firstText-container">
            <h6 className="appointmentPage-firstText">
            TEL{" "}
            </h6>
            <h6 className="appointmentPage-hours">0172 3465694</h6>
          </div>

          <div className="appointmentPage-firstText-container">
            <h6 className="appointmentPage-firstText">
            EMAIL{" "}
            </h6>
            <h6 className="appointmentPage-hours">physiopraxis.marian@gmail.com</h6>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;
