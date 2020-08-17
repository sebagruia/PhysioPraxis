import React from "react";
import "./post.css";
import { useHistory } from "react-router-dom";
import Clock from "../../assets/iconmonstr-time-2.png";
import Pin from "../../assets/iconmonstr-pin.png";
import FacebookEmpty from "../../assets/iconmonstr-facebook-empty.png";
import TwitterEmpty from "../../assets/iconmonstr-twitter-empty.png";
import InstagramEmpty from "../../assets/iconmonstr-instagram-empty.png";
import { arangedTitle } from "../../utils";

const Post = ({ id, date, image, title, text }) => {
  const history = useHistory();
  const { pathname } = history.location;

  const toPostPage = () => {
    history.push(`/news/${arangedTitle(title)}`, {
      id,
      date,
      image,
      title,
      text,
    });
  };
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="post-container" id={id}>
      <img src={image} alt="post" />
      <div className="post-date">
        <div className="post-date-clock">
          <img src={Clock} alt="clock" />
          <p>{date}</p>
        </div>
        <hr className="post-date-hr"></hr>
      </div>
      <div
        className="post-title"
        role="button"
        onClick={pathname === "/news" ? toPostPage : null}
      >
        <img src={Pin} alt="pin" />
        <h1>{title}</h1>
      </div>
      <div
        className="post-description"
        style={pathname === "/news" ? { height: "100px" } : { height: "auto" }}
      >
        <p>{text}</p>
      </div>
      <hr className="post-end-hr"></hr>
      <div className="post-footer">
        <div
          onClick={pathname === "/news" ? toPostPage : goBack}
          className="continue-reading"
          role="button"
        >
          <p>{pathname === "/news" ? "Continue Reading" : "Back"}</p>
        </div>
        <div className="post-footer-socials">
          <a href="https://www.facebook.com/physiopraxis.marian/">
            <img src={FacebookEmpty} alt="facebook icon" />
          </a>
          <a href="https://www.facebook.com/physiopraxis.marian/">
          <img src={TwitterEmpty} alt="twitter icon" />
          </a>
          <a href="https://www.facebook.com/physiopraxis.marian/">
          <img src={InstagramEmpty} alt="instagram icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;