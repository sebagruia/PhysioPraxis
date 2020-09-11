import React, { Fragment, useState } from "react";
import "./home.css";
import { connect } from "react-redux";
import BookingForm from "../../components/BookingForm/bookingForm";
import MapLocation from "../../components/MapLocation/mapLocation";
import AdditionalInfoButton from "../../components/AdditionalInfoButton/additionalInfoButton";
import AddTestimonialAndPostButton from "../../components/AddTestimonialAndPostButton/addTestimonialAndPostButton";
import Testimonial from "../../components/Testimonial/testimonial";

const Home = ({ currentUser, testimonials }) => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <Fragment>
      <div className="container-fluid hero-section">
        <div className="hero-img">
          <div className="container hero-img-title-container">
            <div className="full-title">
              <div className="background-for-text">
                <h1 className="hero-img-title">
                  Praxis<span className="hero-img-title-span"> für</span>
                </h1>
              </div>
              <div className="background-for-text">
                <h1 className="hero-img-title">Physiotherapie</h1>
              </div>
              <div className="moto">
                <h6 className="moto-text">QUALITÄT</h6>
                <h6 className="moto-text">RESPEKT</h6>
                <h6 className="moto-text">INNOVATION</h6>
              </div>
            </div>
          </div>
        </div>
        <div className=" container hero-description">
          <div className="box box1">
            <div className="boxTitle">
              <h4>Professional Physiotherapist</h4>
            </div>
            <div className="boxTitle-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed massa diam sed est
                vitae eget dolor et, turpis
              </p>
            </div>
          </div>
          <div className="box box2">
            <div className="boxTitle boxTitle-box2">
              <h4>Insurance Partner</h4>
            </div>
            <div className="boxTitle-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed massa diam sed est
                vitae eget dolor et, turpis
              </p>
            </div>
            <div className="boxTitle boxTitle-box2">
              <h4>Insurance Partner</h4>
            </div>
          </div>
          <div className="box box3">
            <div className="boxTitle">
              <h4>Affordable Prices</h4>
            </div>
            <div className="boxTitle-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                massa diam sed est vitae eget dolor et, turpis.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Sed massa diam sed est
                vitae eget dolor et, turpis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid professionalPreview-container">
        <div className="container professionalPreview-section">
          <div className="professionalPreview-text">
            <h1>Physiotherapist Marian</h1>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Senectus
              egestas libero suscipit nec, facilisis nisl. At suspendisse et
              amet, gravida. Erat tincidunt tempor cras suscipit quam bibendum.
              Tortor nisl enim orci consequat scelerisque ultrices massa lectus
              ipsum. Feugiat lacus nisi morbi sed habitant dictum at morbi.
              Vulputate urna, quis sit accumsan. Velit integer nisi, et
              consequat egestas feugiat feugiat massa sit. Parturient tortor,
              habitasse ut odio proin ornare blandit mauris. Lacinia quisque vel
              auctor cursus aliquet sem placerat consequat.
            </p>
            <h4>Marian Popescu (signature)</h4>
          </div>
          <div className="professionalPreview-img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/home%2Fdoctor1.png?alt=media&token=0ae9fe55-57e9-42ef-abc7-86bc84a8833d"
              alt="the doctor"
            />
          </div>
        </div>
      </div>

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
              {Object.values(testimonials).map((testimonial) => (
                <Testimonial
                  key={testimonial.id}
                  text={testimonial.message}
                  image={testimonial.selectionAvatar}
                  name={testimonial.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid map">
        <MapLocation />
        <AdditionalInfoButton handleDisplay={handleDisplay} display={display} />
        <div
          className="additionalInfo"
          style={display ? { display: "none" } : { display: "flex" }}
        >
          <div className="weg">
            <ul>
              <h5>WEGBESCHREIBUNG</h5>
              <h6>Parkmöglichkeiten</h6>
              <li>2 patienten Parkplätze stehen zur Verfügung</li>
            </ul>
            <ul>
              <h6>Mit öffentlichen Verkersmittel</h6>
              <p>Haltestelle:</p>
              <li>Klinikum(150m)</li>
              <li>Kasinostr.(150m)</li>
              <li>Rhein-/Neckarstr. (500m)</li>
              <li>Willy-Brandt-Platz (350m)</li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    testimonials: state.userReducer.testimonials,
  };
};

export default connect(mapStateToProps)(Home);
