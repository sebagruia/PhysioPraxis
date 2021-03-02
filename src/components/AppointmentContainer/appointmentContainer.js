import React from "react";
import "./appointmentContainer.css";

import BookingForm from "../../components/BookingForm/bookingForm";
import Testimonial from "../../components/Testimonial/testimonial";

const AppointmentContainer = ({ testimonials }) => {
  return (
        <div
          className="container-fluid appointment-container"
          id="scroll-to-appointment"
        >
          <div className="container appointment-section">
            <BookingForm />

            <div className="testimonials-subsection">
              <div className="testimonial-title-container">
                <h1 className="testimonials-title">Testimonials</h1>
              </div>
              <div className="testimonials-container">
                {
                  testimonials.items.map((testimonial) => (
                    <Testimonial
                      key={testimonial.sys.id}
                      testimonial={testimonial.fields}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
  );
};

export default AppointmentContainer;
