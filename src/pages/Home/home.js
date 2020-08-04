import React, { Fragment } from "react";
import "./home.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Doctor from "../../assets/doctor1.png";
import Quote from "../../assets/iconmonstr-quote.png";
import Face1 from "../../assets/face1.jpg";
import Face2 from "../../assets/face2.jpg";
import Face3 from "../../assets/face3.jpg";
import MapLocation from "../../components/MapLocation/mapLocation";
import Phone from "../../assets/iconmonstr-phone.png";
import Mail from "../../assets/iconmonstr-email.png";


const Home = () => {
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

      <div className="container-fluid appointment-container">
        <div className="container appointment-section">
          <Form className="appointment">
            <div className="appointment-text">
              <h1>Book Appointment</h1>
              <h6>We are here for you</h6>
            </div>
            <div className="appointment-inputs">
              <div className="group">
                <FormControl
                  type="text"
                  placeholder="Your Full Name"
                  aria-label="Your Full Name"
                  aria-describedby="basic-addon1"
                  required
                />
                <FormControl
                  type="date"
                  placeholder="Date"
                  aria-label="Date"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>
              <div className="group">
                <FormControl
                  type="text"
                  placeholder="Phone"
                  aria-label="Phone"
                  aria-describedby="basic-addon1"
                  required
                />
                <FormControl
                  type="time"
                  min="08:00"
                  max="18:00"
                  placeholder="Time"
                  aria-label="Time"
                  aria-describedby="basic-addon1"
                  required
                />
                <span className="validity"></span>
              </div>
            </div>
            <textarea
              className="form-control"
              aria-label="With textarea"
              rows="4"
              cols="50"
              placeholder="Special request..."
            ></textarea>
            <div className="book-button" role="button" type="submit">
              <p>BOOK</p>
            </div>
          </Form>
          <div className="testimonials-subsection">
            <h1 className="testimonials-title">Testimonials</h1>
            <div className="testimonials-container">
              <div className="testimonial">
                <div className="quote">
                  <img src={Quote} alt="quote" />
                </div>
                <div className="quote-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna egestas diam nunc orci. Nulla bibendum cum tristique
                    diam varius fringilla magna commodo at. Vel varius semper
                    nisl cursus aliquam urna semper quam. Vivamus proin blandit
                    pharetra quis porttitor massa.
                  </p>
                </div>
                <div className="avatar">
                  <div className="avatar-face">
                    <img src={Face1} alt="a woman" />
                  </div>
                  <h6>Mirela Ionescu</h6>
                </div>
              </div>
              <div className="testimonial">
                <div className="quote">
                  <img src={Quote} alt="quote" />
                </div>
                <div className="quote-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna egestas diam nunc orci. Nulla bibendum cum tristique
                    diam varius fringilla magna commodo at. Vel varius semper
                    nisl cursus aliquam urna semper quam. Vivamus proin blandit
                    pharetra quis porttitor massa.
                  </p>
                </div>
                <div className="avatar">
                  <div className="avatar-face">
                    <img src={Face2} alt="a man" />
                  </div>
                  <h6>Andrei Baciu</h6>
                </div>
              </div>
              <div className="testimonial">
                <div className="quote">
                  <img src={Quote} alt="quote" />
                </div>
                <div className="quote-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna egestas diam nunc orci. Nulla bibendum cum tristique
                    diam varius fringilla magna commodo at. Vel varius semper
                    nisl cursus aliquam urna semper quam. Vivamus proin blandit
                    pharetra quis porttitor massa.
                  </p>
                </div>
                <div className="avatar">
                  <div className="avatar-face">
                    <img src={Face3} alt="a woman" />
                  </div>
                  <h6>Delia Gruia</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid map">
        <MapLocation />
        <div className="additionalInfo">
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
