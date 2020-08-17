import React from "react";
import "./news.css";
import Post from "../../components/Post/post";
import RecentPost from "../../components/RecentPost/recentPost";
import PageHeader from "../../components/PageHeader/pageHeader";
import { newsContent } from "../../utils";

const News = () => {
  return (
    <div className="container-fluid news">
      <PageHeader>News</PageHeader>
      <div className="news-container container">
        <div className="news-post-container">
          {Object.values(newsContent).map((post) => (
            <Post
              key={post.id}
              id={post.id}
              date={post.date}
              image={post.image}
              title={post.postTitle}
              text={post.postText}
            />
          ))}
        </div>
        <div className="recent-post-container">
          <h2>Recent Posts</h2>
          <hr className="recent-post-hr"></hr>
          {Object.values(newsContent).map((post) => (
            <RecentPost
              key={post.id}
              id={post.id}
              date={post.date}
              image={post.image}
              title={post.postTitle}
              text={post.postText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
