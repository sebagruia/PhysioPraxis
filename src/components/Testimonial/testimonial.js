import React from "react";
import "./testimonial.css";

const Testimonial = ({testimonial})=>{
    return(
        <div className="testimonial">
        <div className="quote">
          <img src={testimonial.quoteIcon.fields.file.url} alt="quote" />
        </div>
        <div className="quote-text">
          <p>
            {testimonial.content}
          </p>
        </div>
        <div className="avatar">
          <div className="avatar-face">
            <img src={testimonial.avatarImage.fields.file.url} alt="a man" />
          </div>
          <h6>{testimonial.name}</h6>
        </div>
      </div>
    );
}

export default Testimonial;