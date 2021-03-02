import React, { Fragment, useEffect, useRef } from "react";
import "./postPage.css";

import { connect } from "react-redux";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams, useHistory } from "react-router-dom";
import Button from "../../components/Button/button";
import Clock from "../../assets/iconmonstr-time-2.png";
import FacebookEmpty from "../../assets/iconmonstr-facebook-empty.png";
import TwitterEmpty from "../../assets/iconmonstr-twitter-empty.png";
import InstagramEmpty from "../../assets/iconmonstr-instagram-empty.png";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import { arangedTitle, formatDate } from "../../DATA";

const PostPage = ({ posts }) => {
  
  const refToPost = useRef(null);
  const history = useHistory();

  useEffect(() => {
    posts &&
      refToPost.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  });

  const goBack = () => {
    history.goBack();
  };

  const params = useParams();
  const postObj =
    posts &&
    posts.items.filter(
      (post) => arangedTitle(post.fields.title) === params.post_id
    );

  const { fields } = postObj !== null && postObj[0];

  const parsedTitle = posts && arangedTitle(fields.title);

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [INLINES.HYPERLINK]: (node, next) =>
        `<a class="post_link" href=${node.data.uri} target="_blank">${next(
          node.content
        )}</a>`,
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
    <HelmetProvider>
      {posts && (
        <Fragment>
          <Helmet>
            <title>{fields.title}</title>
            <meta name="description" content={fields.shortDescription} />
            <meta property="og:title" content={fields.title}></meta>
            <meta
              property="og:image:url"
              content={fields.image.fields.file.url}
            />
            <meta
              property="og:image:secure_url"
              content={fields.image.fields.file.url}
            />
            <meta property="og:image:type" content="image/jpeg" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            <meta
              property="og:image:alt"
              content="The PhysioPraxis Marian Logo"
            />
            <meta
              property="og:url"
              content={`${process.env.REACT_APP_PUBLIC_URL}/news/${parsedTitle}`}
            />
            <meta
              property="og:description"
              content={`${fields.title.slice(0, 120)}...`}
            />
          </Helmet>

          <div className="postPage-container container" ref={refToPost}>
            <div className="post-container">
              <div className="postPage_title_container">
                <h1 className="postPage_title">{fields.title}</h1>
                <div className="postPage-date">
                <div className="postPage-date-clock">
                  <img src={Clock} alt="clock" />
                  <p>{formatDate(fields.date)}</p>
                </div>
              </div>
              </div>
            
              <img className = "postPage_image" src={fields.image.fields.file.url} alt="post" />

              <div className="pagePost-description" style={{ height: "auto" }}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: documentToHtmlString(
                      fields.content,
                      RICHTEXT_OPTIONS
                    ),
                  }}
                ></div>
              </div>
              <hr className="post-end-hr"></hr>
              <div className="post-footer">
                <Button onClick={goBack}>Zurück</Button>

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
          </div>
        </Fragment>
      )}
    </HelmetProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.userReducer.posts,
  };
};

export default connect(mapStateToProps)(PostPage);
