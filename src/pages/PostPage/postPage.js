import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import "./postPage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/post";
import { arangedTitle } from "../../DATA";

const PostPage = ({ news }) => {
  const refToPost = useRef(null);

  useEffect(() => {
    refToPost.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });

  const params = useParams();
  const postObj =
    news.length !== 0 &&
    news.filter((post) => arangedTitle(post.postTitle) === params.post_id);
  const { id, createDate, postImageLink, postTitle, postText } = postObj && postObj[0];

  const parsedTitle = postTitle && arangedTitle(postTitle);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{postTitle && postTitle}</title>
        <meta name="description" content={postText && postText}/>
        <meta property="og:title" content={postTitle && postTitle}></meta>
        <meta
          property="og:image:url"
          content={postImageLink && postImageLink}
        />
        <meta
          property="og:image:secure_url"
          content={postImageLink && postImageLink}
        />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_PUBLIC_URL}/news/${parsedTitle}`}
        />
        <meta property="og:description" content={`${postText && postText.slice(0,120)}...`}/>
      </Helmet>
      <div className="postPage-container container" ref={refToPost}>
        <Post
          id={id}
          date={createDate}
          image={postImageLink}
          title={postTitle}
          text={postText}
        />
      </div>
    </HelmetProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.userReducer.news,
  };
};

export default connect(mapStateToProps)(PostPage);
