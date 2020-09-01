import React, { Fragment, useState } from "react";
import "./addTestimonialAndPostButton.css";
import { connect } from "react-redux";
import {useLocation} from "react-router-dom";
import Plus from "../../assets/iconmonstr-plus-circle.png";
import Minus from "../../assets/iconmonstr-minus-circle.png";
import TestimonialFrom from "../TestimonialForm/testimonialForm";
import PostForm from "../PostForm/postForm";
import { addTestimonial,addPost } from "../../firebase/firebase";
import { getTestimonials,getNews } from "../../redux/redux-actions";

const AddTestimonialAndPostButton = ({ dispatch, currentUser, visible }) => {
  const [active, setActive] = useState(false);

  const location = useLocation();
  const {pathname} = location;


  const handleClick = () => {
    setActive(!active);
  };

  const handleSubmitTestimonialOrPost = (event, name, message, image) => {
    event.preventDefault();
    if(pathname === "/"){
      addTestimonial(name, message, image);
      dispatch(getTestimonials());
    }
    else if(pathname === "/news"){
      addPost(name, message,image);
      dispatch(getNews());
    }
    
    setActive(!active);
  };


  
  return (
    <Fragment>
      {!active ? (
        <img
          className={`plus-button ${visible ? "hidden" : ""} ${pathname === "/news" ? "positionInNewsPage" : ""}`}
          onClick={handleClick}
          src={Plus}
          alt="plus icon"
          role="button"
          style={currentUser ? { display: "initial" } : { display: "none" }}
        />
      ) : (
        <img
          className={`minus-button ${pathname === "/news" ? "positionInNewsPage" : ""}`}
          onClick={handleClick}
          src={Minus}
          alt="minus icon"
          role="button"
          style={currentUser ? { display: "initial" } : { display: "none" }}
        />
      )}
      {
        pathname === "/"
        ? <TestimonialFrom active={active} handleSubmitTestimonialOrPost={handleSubmitTestimonialOrPost} />
        : <PostForm active={active} handleSubmitTestimonialOrPost={handleSubmitTestimonialOrPost}/>
      }
      
    </Fragment>
  );
};

export default connect()(AddTestimonialAndPostButton);
