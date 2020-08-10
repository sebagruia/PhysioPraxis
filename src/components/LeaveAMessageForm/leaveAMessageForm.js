import React, { Component } from "react";
import "./leaveAMessageForm.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import CloseThinButton from "../CloseThinButton/closeThinButton";
import emailjs from "emailjs-com";

class LeaveAMessageForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      message: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_NEW_MESSAGE_TEMPLATE,
        this.state,
        process.env.REACT_APP_YOUR_USER_ID
      )
      .then(
        (result) => {
          console.log("SUCCES", result.text);
        },
        (error) => {
          console.log("FAILED", error.text);
        }
      );
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
    const { handleLeaveAMessageButton, leaveMessageOn } = this.props;
    const { name, email, message } = this.state;
    return (
      <div className={`leave-a-message ${leaveMessageOn ? "widen" : "shrink"}`}>
        <CloseThinButton
          handleLeaveAMessageButton={handleLeaveAMessageButton}
          leaveMessageOn={leaveMessageOn}
        />
        <Form
          onSubmit={this.handleSubmit}
          className="leave-a-message-container container"
          style={
            leaveMessageOn
              ? { opacity: "1" }
              : { opacity: "0", transition: " opacity  0.1s linear" }
          }
        >
          <h5>Your Message Here</h5>
          <Form.Group className="leave-a-message-form">
            <FormControl
              onChange={this.handleOnChange}
              className="message-input"
              type="text"
              placeholder="Full Name"
              aria-label="Full Name"
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
              placeholder="your message..."
              name="message"
              value={message}
              required
            ></Form.Control>
          </Form.Group>
          <button className="book-button" type="submit">
            <p>SEND</p>
          </button>
        </Form>
      </div>
    );
  }
}

export default LeaveAMessageForm;
