import React, { useEffect, useRef } from "react";
import "./postPage.css";

import { connect } from "react-redux";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/post";
import { arangedTitle } from "../../DATA";

const PostPage = ({ posts }) => {
  
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
    posts &&
    posts.items.filter((post) => arangedTitle(post.fields.title) === params.post_id);
    console.log(postObj);

  const parsedTitle = postTitle && arangedTitle(postTitle);
  return (
    <HelmetProvider>
      <Helmet>
        <title>{postTitle && postTitle}</title>
        <meta name="description" content={postText && postText} />
        <meta property="og:title" content={postTitle && postTitle}></meta>
        <meta
          property="og:image:url"
          content={postImageLink && postImageLink}
        />
        <meta
          property="og:image:secure_url"
          content={postImageLink && postImageLink}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="The PhysioPraxis Marian Logo" />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_PUBLIC_URL}/news/${parsedTitle}`}
        />
        <meta
          property="og:description"
          content={`${postText && postText.slice(0, 120)}...`}
        />
      </Helmet>
      <div className="postPage-container container" ref={refToPost}>
        <Post post={postObj[0]}/>
      </div>
    </HelmetProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.userReducer.posts,
  };
};

export default connect(mapStateToProps)(PostPage);
