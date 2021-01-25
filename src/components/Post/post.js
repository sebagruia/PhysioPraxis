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
    history.push(`/news/${arangedTitle(fields.title)}`, {
      id: sys.id,
      date: fields.date,
      image: fields.image.fields.file.url,
      title: fields.title,
      text: fields.content,
    });
  };
  const goBack = () => {
    history.goBack();
  };
  const parsedTitle = arangedTitle(fields.title);

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, next) =>
        `<a class="post_link" href=${
          node.data.uri
        } target="_blank">${next(node.content)}</a>`,
      [BLOCKS.EMBEDDED_ASSET]: (node) =>
        `<img class="post_contentful_img" src="${node.data.target.fields.file.url}"/>`,
      [BLOCKS.HEADING_1]: (node, next) =>
        `<h1 class="post_h1">${next(node.content)}</h1>`,
      [BLOCKS.HEADING_2]: (node, next) =>
        `<h2 class="post_h2">${next(node.content)}</h2>`,
      [BLOCKS.HEADING_3]: (node, next) =>
        `<h3 class="post_h3">${next(node.content)}</h3>`,
      [BLOCKS.PARAGRAPH]: (node, next) =>
        `<p class="post_paragraph">${next(node.content)}</p>`,
      [BLOCKS.UL_LIST]: (node, next) =>
        `<ul class="post_ul">${next(node.content)}</ul>`,
      [BLOCKS.OL_LIST]: (node, next) =>
        `<ul class="post_ol">${next(node.content)}</ul>`,
      [BLOCKS.LIST_ITEM]: (node, next) =>
        `<li class="post_li">${next(node.content)}</li>`,
      [BLOCKS.QUOTE]: (node, next) =>
        `<blockquote class="post_blockquote">${next(
          node.content
        )}</blockquote>`,
    },
  };

  return (
    <div className="post-container" id={sys.id}>
      <img
        src={fields.image.fields.file.url}
        alt="post"
        onClick={pathname === "/news" ? toPostPage : null}
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
        onClick={pathname === "/news" ? toPostPage : null}
      >
        <img src={Pin} alt="pin" />
        <h1>{fields.title}</h1>
      </div>
      <div
        className="post-description"
        style={pathname === "/news" ? { height: "100px" } : { height: "auto" }}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(fields.content, RICHTEXT_OPTIONS),
          }}
        ></div>
      </div>
      <hr className="post-end-hr"></hr>
      <div className="post-footer">
        <Button onClick={pathname === "/news" ? toPostPage : goBack}>
          {pathname === "/news" ? "Weiterlesen" : "Zurück"}
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
