import React from "react";
import "./news.css";
import Post from "../../components/Post/post";
import PageHeader from "../../components/PageHeader/pageHeader";

const News = () => {
  return (
    <div className="container-fluid news">
      <PageHeader>News</PageHeader>
      <div className="news-container container">
        <Post />
      </div>
    </div>
  );
};

export default News;
