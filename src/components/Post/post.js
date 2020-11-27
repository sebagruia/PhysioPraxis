import React from "react";
import "./post.css";
import { useHistory } from "react-router-dom";
import Button from "../Button/button";
import Clock from "../../assets/iconmonstr-time-2.png";
import Pin from "../../assets/iconmonstr-pin.png";
import FacebookEmpty from "../../assets/iconmonstr-facebook-empty.png";
import TwitterEmpty from "../../assets/iconmonstr-twitter-empty.png";
import InstagramEmpty from "../../assets/iconmonstr-instagram-empty.png";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { arangedTitle } from "../../DATA";

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
  const parsedTitle = title && arangedTitle(title);
  return (
    <div className="post-container" id={id}>
      <img
        src={image}
        alt="post"
        onClick={pathname === "/news" ? toPostPage : null}
      />
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
        <Button onClick={pathname === "/news" ? toPostPage : goBack}>
          {pathname === "/news" ? "Weiterlesen" : "Zurück"}
        </Button>

        <div className="post-footer-socials">
          <FacebookShareButton
            url={`${process.env.PUBLIC_URL}news/${parsedTitle}`}
          >
            <img src={FacebookEmpty} alt="facebook icon" />
          </FacebookShareButton>
          {/* <a href="https://www.facebook.com/physiopraxis.marian/">
            <img src={FacebookEmpty} alt="facebook icon" />
          </a> */}
          <TwitterShareButton
            url={`${process.env.PUBLIC_URL}news/${parsedTitle}`}
          >
            <img src={TwitterEmpty} alt="twitter icon" />
          </TwitterShareButton>
          {/* <a href="https://www.facebook.com/physiopraxis.marian/">
            <img src={TwitterEmpty} alt="twitter icon" />
          </a> */}
          <a href="https://www.facebook.com/physiopraxis.marian/">
            <img src={InstagramEmpty} alt="instagram icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
