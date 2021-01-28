import React, { Component } from "react";
import "./bookingForm.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import emailjs from "emailjs-com";
import { todayDate, day } from "../../DATA";
import { sendingMessageStatusAction } from "../../redux/redux-actions";

import ReCAPTCHA from "react-google-recaptcha";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import BookButton from "../../components/BookButton/bookButton";
import PopUp from "../PopUp/popUp";

class BookingForm extends Component {
  constructor() {
    super();
    this.recaptchaRef = React.createRef();
    this.state = {
      email: "",
      name: "",
      date: "",
      time: "",
      phone: "",
      message: "",
      "g-recaptcha-response": "",
    };
  }

  sendMessageWithEmailJs = () => {
    emailjs
      .send(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        this.state,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            this.props.dispatch(
              sendingMessageStatusAction(!this.props.sendingMessageStatus)
            );
            console.log("SUCCES", result.text);
          }
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendMessageWithEmailJs(this.state);
    this.recaptchaRef.current.reset();
    this.setState({
      email: "",
      name: "",
      date: "",
      time: "",
      phone: "",
      message: "",
    });
  };

  handleOnChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };
  handleOnChangeReCAptcha = (value) => {
    console.log("g-recaptcha-response: Generated");
    this.setState({ "g-recaptcha-response": value });
  };

  checkDateValidity = (date) => {
    if (day(date) === 0) {
      return "";
    } else {
      return date;
    }
  };

  render() {
    const { history, sendingMessageStatus } = this.props;
    const { pathname } = history.location;
    const { email, name, date, time, phone, message } = this.state;

    return (
      <Form
        onSubmit={this.handleSubmit}
        className={`appointment ${
          pathname === "/appointmentPage" ? "substractMarginBottom" : ""
        } `}
      >
        <div className="appointment-text">
          <h1>Termin vereinbaren</h1>
          <h6>Wir freuen uns auf Sie</h6>
        </div>
        <FormControl
          onChange={this.handleOnChange}
          type="text"
          placeholder="Email"
          aria-label="Email"
          value={email}
          name="email"
          required
        />
        <div className="appointment-inputs">
          <Form.Group className="group">
            <FormControl
              onChange={this.handleOnChange}
              type="text"
              placeholder="Name"
              aria-label="Name"
              value={name}
              name="name"
              required
            />
            <Form.Label>Datum</Form.Label>
            <FormControl
              onChange={this.handleOnChange}
              type="date"
              placeholder="Datum"
              aria-label="Datum"
              min={todayDate()}
              value={this.checkDateValidity(date)}
              name="date"
              required
            />
          </Form.Group>

          <Form.Group className="group">
            <FormControl
              onChange={this.handleOnChange}
              type="tel"
              placeholder="Telefonnummer"
              aria-label="Telefonnummer"
              aria-describedby="basic-addon1"
              value={phone}
              name="phone"
              required
            />
            <Form.Label>Uhrzeit</Form.Label>
            <FormControl
              onChange={this.handleOnChange}
              type="time"
              min="08:00"
              max={`${day(date) === 6 ? "14:00" : "20:00"}`}
              placeholder="Uhrzeit"
              aria-label="Uhrzeit"
              aria-describedby="basic-addon1"
              value={time}
              name="time"
              required
            />
          </Form.Group>
        </div>
        <Form.Control
          onChange={this.handleOnChange}
          as="textarea"
          rows="4"
          cols="50"
          placeholder="Sonderwunsch..."
          value={message}
          name="message"
        ></Form.Control>
        <div className="buttonAndPopUp-container">
          <BookButton buttonName="Vereinbaren" />
          <PopUp messageStatus={sendingMessageStatus}>Sent</PopUp>
          <ReCAPTCHA
            ref={this.recaptchaRef}
            sitekey={`${process.env.REACT_APP_YOUR_RECAPTCHA_KEY}`}
            onChange={this.handleOnChangeReCAptcha}
            className="g-recaptcha"
          />
        </div>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sendingMessageStatus: state.userReducer.sendingMessageStatus,
  };
};

export default withRouter(connect(mapStateToProps)(BookingForm));
