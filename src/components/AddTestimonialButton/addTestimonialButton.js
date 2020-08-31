import React, { Fragment, useState } from "react";
import "./addTestimonialButton.css";
import {connect} from "react-redux";
import Plus from "../../assets/iconmonstr-plus-circle.png";
import Minus from "../../assets/iconmonstr-minus-circle.png";
import TestimonialFrom from "../TestimonialForm/testimonialForm";
import { addTestimonial } from "../../firebase/firebase";
import {getTestimonials} from "../../redux/redux-actions";


const AddTestimonialButton = ({ dispatch, currentUser }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const handleSubmit = (event,name, message, selectionAvatar) => {
    event.preventDefault();
    addTestimonial(name, message, selectionAvatar)
    dispatch(getTestimonials());
    setActive(!active)
  };
  return (
    <Fragment>
      {!active ? (
        <img
          onClick={handleClick}
          src={Plus}
          alt="plus icon"
          role="button"
          style={currentUser ? { display: "initial" } : { display: "none" }}
        />
      ) : (
        <img
          onClick={handleClick}
          src={Minus}
          alt="minus icon"
          role="button"
          style={currentUser ? { display: "initial" } : { display: "none" }}
        />
      )}

      <TestimonialFrom active={active} handleSubmit={handleSubmit}/>
    </Fragment>
  );
};

export default connect()(AddTestimonialButton);
