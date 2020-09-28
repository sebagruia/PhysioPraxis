import React, { Component } from "react";
import "./bookingForm.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { todayDate, day } from "../../DATA";
import { sendingMessageStatusAction } from "../../redux/redux-actions";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import BookButton from "../../components/BookButton/bookButton";
import PopUp from "../PopUp/popUp";
import emailjs from "emailjs-com";

class BookingForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      date: "",
      time: "",
      phone: "",
      message: "",
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
              sendingMessageStatusAction(this.props.bookingMessageStatus)
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
    this.sendMessageWithEmailJs();
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

  checkDateValidity = (date)=>{
    if(day(date) === 0){
      return ""
    }
    else{
      return date;
    }
  }

  render() {
    const { history, sendingMessageStatus } = this.props;
    const { pathname } = history.location;
    const { email, name, date, time, phone, message } = this.state;
    console.log(day(date))
console.log(date);
    return (
      <Form
        onSubmit={this.handleSubmit}
        className={`appointment ${
          pathname === "/appointmentPage" ? "substractMarginBottom" : ""
        } `}
      >
        <div className="appointment-text">
          <h1>Book Appointment</h1>
          <h6>We are here for you</h6>
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
              placeholder="Your Full Name"
              aria-label="Your Full Name"
              value={name}
              name="name"
              required
            />
            <Form.Label>Date</Form.Label>
            <FormControl
              onChange={this.handleOnChange}
              type="date"
              placeholder="Date"
              aria-label="Date"
              min={todayDate()}
              value={this.checkDateValidity(date)}
              name="date"
              required
            />
          </Form.Group>

          <Form.Group className="group">
            <FormControl
              onChange={this.handleOnChange}
              type="phone"
              placeholder="Phone"
              aria-label="Phone"
              aria-describedby="basic-addon1"
              value={phone}
              name="phone"
              required
            />
            <Form.Label>Time</Form.Label>
            <FormControl
              onChange={this.handleOnChange}
              type="time"
              min="08:00"
              max={`${day(date) === 6 ? "14:00" : "20:00"}`}
              placeholder="Time"
              aria-label="Time"
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
          placeholder="Special request..."
          value={message}
          name="message"
        ></Form.Control>
        <div className="buttonAndPopUp-container">
          <BookButton buttonName="BOOK" />
          <PopUp messageStatus={sendingMessageStatus}>Sent</PopUp>
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
