import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import "./postPage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Post from "../../components/Post/post";
import LoadingSpinner from "../../components/LoadingSpinner/loadingSpinner";


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

  return (
    <HelmetProvider>
      {news.length === 0 ? <LoadingSpinner /> : null}
      <Helmet>
        <meta
          name="description"
          content="Praxis für Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibuläre Dysfunktionen Heiß- und Kalttherapie"
        />
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
