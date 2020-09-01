import React from "react";
import "./news.css";
import { connect } from "react-redux";
import Post from "../../components/Post/post";
import RecentPost from "../../components/RecentPost/recentPost";
import PageHeader from "../../components/PageHeader/pageHeader";
import AddTestimonialAndPostButton from "../../components/AddTestimonialAndPostButton/addTestimonialAndPostButton";

const News = ({currentUser, news}) => {
  return (
    <div className="container-fluid news">
      <PageHeader>News</PageHeader>
      
      <div className="news-container container">
        <div className="news-post-container">
        <AddTestimonialAndPostButton currentUser={currentUser}/>
          {Object.values(news).map((post) => (
            <Post
              key={post.id}
              id={post.id}
              date={post.createDate}
              image={post.postImageLink}
              title={post.postTitle}
              text={post.postText}
            />
          ))}
        </div>
        <div className="recent-post-container">
          <h2>Recent Posts</h2>
          <hr className="recent-post-hr"></hr>
          {Object.values(news).map((post) => (
            <RecentPost
              key={post.id}
              id={post.id}
              date={post.createDate}
              image={post.postImageLink}
              title={post.postTitle}
              text={post.postText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state)=>{
  return{
    currentUser: state.userReducer.currentUser,
    news:state.userReducer.news
  }
}

export default connect(mapStateToProps)(News);
