import React, { Component, Fragment } from "react";
import "./testimonialForm.css";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import BookButton from "../../components/BookButton/bookButton";

class TestimonialForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      selectionAvatar: "",
    };
  }

  handleOnChange = (event) => {
    const name = event.target.name;
    console.log(name);
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { active, handleSubmitTestimonialOrPost } = this.props;
    const { name, message, selectionAvatar } = this.state;

    const femaleAvatarImageLink =
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/avatars%2Ffemale-avatar.png?alt=media&token=011ad62f-0def-48b9-b38e-d845f8f5c771";
    const maleAvatarImageLink =
      "https://firebasestorage.googleapis.com/v0/b/physiopraxis-51c08.appspot.com/o/avatars%2Fmale-avatar.png?alt=media&token=e911afab-a358-4c49-8084-60cff06fc0fb";

    return (
      <Fragment>
        {active ? (
          <Form
            onSubmit={(event) => {
              handleSubmitTestimonialOrPost(
                event,
                name,
                message,
                selectionAvatar
              );
              this.setState({
                name: "",
                message: "",
                selectionAvatar: "",
              });
            }}
            className="testimonialForm"
          >
            <div className="appointment-text">
              <h1>New Testimonial</h1>
            </div>
            <Form.Group className="testimonialForm-group">
              <FormControl
                className="testimonialForm-name"
                onChange={this.handleOnChange}
                type="text"
                placeholder=" Name"
                aria-label="Name"
                value={name}
                name="name"
                required
              />
              <Form.Control
                onChange={this.handleOnChange}
                as="select"
                className="mr-sm-2 testimonialForm-select"
                id="inlineFormCustomSelect"
                name="selectionAvatar"
                custom
              >
                <option value="0">Sex</option>
                <option value={maleAvatarImageLink}>männlich</option>
                <option value={femaleAvatarImageLink}>weiblich</option>
              </Form.Control>
            </Form.Group>
            <Form.Control
              onChange={this.handleOnChange}
              as="textarea"
              rows="4"
              cols="50"
              placeholder="Text..."
              value={message}
              name="message"
            ></Form.Control>
            <BookButton buttonName="Send" />
          </Form>
        ) : null}
      </Fragment>
    );
  }
}

export default withRouter(TestimonialForm);
