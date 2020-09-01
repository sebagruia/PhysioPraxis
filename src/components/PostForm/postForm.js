import React, { Component, Fragment } from "react";
import "./postForm.css";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import BookButton from "../../components/BookButton/bookButton";

class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      postTitle: "",
      postText: "",
      postImageLink: "",
    };
  }

  handleOnChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { active, handleSubmitTestimonialOrPost } = this.props;
    const { postTitle, postText, postImageLink } = this.state;

    return (
      <Fragment>
        {active ? (
          <Form
            onSubmit={(event) => {
                handleSubmitTestimonialOrPost(
                event,
                postTitle,
                postText,
                postImageLink
              );
              this.setState({
                postTitle: "",
                postText: "",
                postImageLink: "",
              });
            }}
            className="postForm"
          >
            <div className="appointment-text">
              <h1>New Post</h1>
            </div>

            <Form.Group className="post-group">
              <FormControl
                className="post-image"
                onChange={this.handleOnChange}
                type="text"
                placeholder="Post ImageLink"
                aria-label="Post ImageLink"
                value={postImageLink}
                name="postImageLink"
                required
              />
              <FormControl
                className="post-title-input"
                onChange={this.handleOnChange}
                type="text"
                placeholder="Post Title"
                aria-label="Post Title"
                value={postTitle}
                name="postTitle"
                required
              />
            </Form.Group>

            <Form.Control
              onChange={this.handleOnChange}
              as="textarea"
              rows="4"
              cols="50"
              placeholder="Post Text..."
              value={postText}
              name="postText"
            ></Form.Control>
            <BookButton buttonName="Send" />
          </Form>
        ) : null}
      </Fragment>
    );
  }
}

export default PostForm;
