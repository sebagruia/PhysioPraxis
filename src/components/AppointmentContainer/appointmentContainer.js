import React from "react";
import "./appointmentContainer.css";
// import { connect } from "react-redux";
import BookingForm from "../../components/BookingForm/bookingForm";
import AddTestimonialAndPostButton from "../../components/AddTestimonialAndPostButton/addTestimonialAndPostButton";
import Testimonial from "../../components/Testimonial/testimonial";

const AppointmentContainer = ({ currentUser, testimonials }) => {
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
            <AddTestimonialAndPostButton currentUser={currentUser} />
          </div>
          <div className="testimonials-container">
            {testimonials && testimonials.map((testimonial) => (
              <Testimonial
                key={testimonial.sys.id}
                text={testimonial.fields.content}
                image={testimonial.fields.avatarImage.fields.file.url}
                name={testimonial.fields.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.userReducer.currentUser,
//     testimonials: state.userReducer.testimonials,
//   };
// };

// export default connect(mapStateToProps)(AppointmentContainer);
export default AppointmentContainer;
