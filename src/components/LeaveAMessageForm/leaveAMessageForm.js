import React, { Component } from "react";
import "./leaveAMessageForm.css";
import { connect } from "react-redux";

import { path } from "../../DATA";
import {leaveMessageStatusChange} from "../../redux/redux-actions";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import CloseThinButton from "../CloseThinButton/closeThinButton";
import BookButton from "../../components/BookButton/bookButton";


class LeaveAMessageForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      message: "",
    };
  }

  // sendMessageWithEmailJs = () => {
  //   emailjs
  //   .send(
  //     process.env.REACT_APP_YOUR_SERVICE_ID,
  //     process.env.REACT_APP_YOUR_NEW_MESSAGE_TEMPLATE,
  //     this.state,
  //     process.env.REACT_APP_YOUR_USER_ID
  //   )
  //   .then(
  //     (result) => {
  //       if (result.text === "OK") {
  //         this.props.dispatch(leaveMessageStatusChange(false));
  //       }
  //       console.log("SUCCES", result.text);
  //     },
  //     (error) => {
  //       console.log("FAILED", error.text);
  //     }
  //   );
  // };

  sendMessageWithEmailJs = async (data) => {
    const response = await fetch(`${path}/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.status === 200) {
      this.props.dispatch(
        this.props.dispatch(leaveMessageStatusChange(false))
      );
      console.log("Booking sent successfully");
    } else {
      console.log("Failed to send Booking");
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.sendMessageWithEmailJs(this.state);
    this.setState({
      email: "",
      name: "",
      message: "",
    });
  };

  handleOnChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { leaveMessageStatus} = this.props;
    const { name, email, message } = this.state;
    return (
      <div
        className={`leave-a-message ${leaveMessageStatus ? "widen" : "shrink"}`}
      >
        <CloseThinButton />
        <Form
          onSubmit={this.handleSubmit}
          className="leave-a-message-container container"
          style={
            leaveMessageStatus
              ? { opacity: "1", transition: "opacity 0.8s" }
              : {
                  opacity: "0",
                  visibility: "hidden",
                  transition: "opacity 0.3s, visibility 0.8s",
                }
          }
        >
          <h5>Ihre Nachricht hier</h5>
          <Form.Group className="leave-a-message-form">
            <FormControl
              onChange={this.handleOnChange}
              className="message-input"
              type="text"
              placeholder="Name"
              aria-label="Name"
              name="name"
              value={name}
              required
            />
            <FormControl
              onChange={this.handleOnChange}
              className="message-input"
              type="email"
              placeholder="Email"
              aria-label="Email"
              name="email"
              value={email}
              required
            />
            <Form.Control
              onChange={this.handleOnChange}
              className="message-input"
              as="textarea"
              rows="1"
              cols="50"
              placeholder="Ihre Nachricht..."
              name="message"
              value={message}
              required
            ></Form.Control>
          </Form.Group>
          <div className="buttonAndPopUp-container">
            <BookButton buttonName="SEND" />
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    leaveMessageStatus: state.userReducer.leaveMessageStatus,
  };
};

export default connect(mapStateToProps)(LeaveAMessageForm);
