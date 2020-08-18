import React from "react";
import "./testimonial.css";
import Quote from "../../assets/iconmonstr-quote.png";

const Testimonial = ({text, image, name})=>{
    return(
        <div className="testimonial">
        <div className="quote">
          <img src={Quote} alt="quote" />
        </div>
        <div className="quote-text">
          <p>
            {text}
          </p>
        </div>
        <div className="avatar">
          <div className="avatar-face">
            <img src={image} alt="a man" />
          </div>
          <h6>{name}</h6>
        </div>
      </div>
    );
}

export default Testimonial;