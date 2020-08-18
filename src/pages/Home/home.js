import React, { Fragment, useState } from "react";
import "./home.css";
import BookingForm from "../../components/BookingForm/bookingForm";
import Doctor from "../../assets/doctor1.png";
import MapLocation from "../../components/MapLocation/mapLocation";
import Phone from "../../assets/iconmonstr-phone.png";
import Mail from "../../assets/iconmonstr-email.png";
import AdditionalInfoButton from "../../components/AdditionalInfoButton/additionalInfoButton";
import Testimonial from "../../components/Testimonial/testimonial";
import { testimonialsContent } from "../../DATA";

const Home = () => {
  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <Fragment>
      <div className="container-fluid hero-section">
        <div className="hero-img"></div>
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
            <img src={Doctor} alt="the doctor" />
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
            <h1 className="testimonials-title">Testimonials</h1>
            <div className="testimonials-container">
              {Object.values(testimonialsContent).map((testimonial) => (
                <Testimonial
                  key={testimonial.id}
                  text={testimonial.text}
                  image={testimonial.image}
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
          <div className="workingHours">
            <h5>Working Hours</h5>
            <h6>
              Mon - Fri <span>8:00 - 19:00</span>
            </h6>
            <h6>
              Saturday <span>8:00 - 14:00</span>
            </h6>
            <h6>
              Sunday <span>Closed</span>
            </h6>
          </div>
          <div className="contactDetails">
            <h5>contact details</h5>
            <div className="phone-details">
              <img src={Phone} alt="phone" />
              <h6>0172 2869619</h6>
            </div>
            <div className="contact-details">
              <img src={Mail} alt="email" />
              <h6>physiopraxis.marian@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;