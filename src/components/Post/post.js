import React from "react";
import "./post.css";
import PostImage1 from "../../assets/services2.jpg";
import Clock from "../../assets/iconmonstr-time-2.png";
import Pin from "../../assets/iconmonstr-pin.png";
import FacebookEmpty from "../../assets/iconmonstr-facebook-empty.png";
import TwitterEmpty from "../../assets/iconmonstr-twitter-empty.png";
import InstagramEmpty from "../../assets/iconmonstr-instagram-empty.png";
import { formatDate } from "../../utils";

const Post = () => {
  return (
    <div className="post-container">
      <img src={PostImage1} alt="post" />
      <div className="post-date">
        <div className="post-date-clock">
          <img src={Clock} alt="clock" />
          <p>{formatDate()}</p>
        </div>
        <hr className="post-date-hr"></hr>
      </div>
      <div className="post-title">
        <img src={Pin} alt="pin" />
        <h1>Was ist Physiotherapie?</h1>
      </div>
      <div className="post-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
          vulputate maecenas eget tristique pharetra eu id eu molestie. In id
          non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
          commodo fermentum blandit a quis quis neque tellus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
          vulputate maecenas eget tristique pharetra eu id eu molestie. In id
          non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
          commodo fermentum blandit a quis quis neque tellus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
          vulputate maecenas eget tristique pharetra eu id eu molestie. In id
          non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
          commodo fermentum blandit a quis quis neque tellus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
          vulputate maecenas eget tristique pharetra eu id eu molestie. In id
          non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
          commodo fermentum blandit a quis quis neque tellus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
          vulputate maecenas eget tristique pharetra eu id eu molestie. In id
          non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
          commodo fermentum blandit a quis quis neque tellus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
          vulputate maecenas eget tristique pharetra eu id eu molestie. In id
          non tortor, tempus. Vitae mi odio nascetur libero luctus viverra. Eu
          commodo fermentum blandit a quis quis neque tellus.
        </p>
      </div>
      <hr className="post-end-hr"></hr>
      <div className="post-footer">
        <div className="continue-reading" role="button">
            <p>Continue Reading</p>
        </div>
        <div className="post-footer-socials">
        <img src={FacebookEmpty} alt="facebook icon"/>
        <img src={TwitterEmpty} alt="twitter icon"/>
        <img src={InstagramEmpty} alt="instagram icon"/>
        </div>
      </div>
    </div>
  );
};

export default Post;
