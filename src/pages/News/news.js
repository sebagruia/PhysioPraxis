import React from "react";
import "./news.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";
import Post from "../../components/Post/post";
import RecentPost from "../../components/RecentPost/recentPost";
import PageHeader from "../../components/PageHeader/pageHeader";
import AddTestimonialAndPostButton from "../../components/AddTestimonialAndPostButton/addTestimonialAndPostButton";

const News = ({ currentUser, news }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PhysioPraxis Marian | Aktuelles</title>
        <meta
          name="description"
          content="Praxis für Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibuläre Dysfunktionen Heiß- und Kalttherapie."
        />
      </Helmet>
      <div className="container-fluid news">
        <PageHeader>Aktuelles</PageHeader>

        <div className="news-container container">
          <div className="news-post-container">
            <AddTestimonialAndPostButton currentUser={currentUser} />
            {Object.values(news).map((post) => (
              <Post
                key={post.id}
                id={post.id}
                date={post.createDate}
                image={post.postImageLink}
                title={post.postTitle}
                text={`${post.postText.slice(0,100)}...`}
              />
            ))}
          </div>
          <div className="recent-post-container">
            <h2>Beiträge</h2>
            <hr className="recent-post-hr"></hr>
            {Object.values(news).map((post) => (
              <RecentPost
                key={post.id}
                id={post.id}
                date={post.createDate}
                image={post.postImageLink}
                title={post.postTitle}
                text={`${post.postText.slice(0,100)}...`}
              />
            ))}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    news: state.userReducer.news,
  };
};

export default connect(mapStateToProps)(News);
