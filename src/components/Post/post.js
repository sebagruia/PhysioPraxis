import React from "react";
import "./post.css";

import { useHistory } from "react-router-dom";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import Button from "../Button/button";
import Clock from "../../assets/iconmonstr-time-2.png";
import Pin from "../../assets/iconmonstr-pin.png";
import FacebookEmpty from "../../assets/iconmonstr-facebook-empty.png";
import TwitterEmpty from "../../assets/iconmonstr-twitter-empty.png";
import InstagramEmpty from "../../assets/iconmonstr-instagram-empty.png";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import { arangedTitle, formatDate } from "../../DATA";

const Post = ({ post }) => {
  const history = useHistory();
  const { pathname } = history.location;

  const { sys, fields } = post;

  const toPostPage = () => {
    history.push(`/news/${arangedTitle(fields.title)}`);
  };
 
  const parsedTitle = arangedTitle(fields.title);



  return (
    <div className="post-container" id={sys.id}>
      <img
        src={fields.image.fields.file.url}
        alt="post"
        onClick={toPostPage}
      />
      <div className="post-date">
        <div className="post-date-clock">
          <img src={Clock} alt="clock" />
          <p>{formatDate(fields.date)}</p>
        </div>
        <hr className="post-date-hr"></hr>
      </div>
      <div
        className="post-title"
        role="button"
        onClick={toPostPage}
      >
        <img src={Pin} alt="pin" />
        <h1>{fields.title}</h1>
      </div>
      <div
        className="post-description"
        style={pathname === "/news" ? { height: "100px" } : { height: "auto" }}
      >
        <div><p>{fields.shortDescription}</p></div>
      </div>
      <hr className="post-end-hr"></hr>
      <div className="post-footer">
        <Button onClick={toPostPage}>
          Weiterlesen
        </Button>

        <div className="post-footer-socials">
          <FacebookShareButton
            url={`${process.env.REACT_APP_PUBLIC_URL}/news/${parsedTitle}`}
            quote={`${fields.shortDescription}...`}
          >
            <img src={FacebookEmpty} alt="facebook icon" />
          </FacebookShareButton>
          <TwitterShareButton
            url={`${process.env.REACT_APP_PUBLIC_URL}/news/${parsedTitle}`}
          >
            <img src={TwitterEmpty} alt="twitter icon" />
          </TwitterShareButton>
          <a href="https://www.facebook.com/physiopraxis.marian/">
            <img src={InstagramEmpty} alt="instagram icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
