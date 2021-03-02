import React from "react";
import "./news.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";
import Post from "../../components/Post/post";
import RecentPost from "../../components/RecentPost/recentPost";
import PageHeader from "../../components/PageHeader/pageHeader";
import LoadingSpinner from "../../components/LoadingSpinner/loadingSpinner";

import {latestArticles} from "../../DATA";

const News = ({ posts }) => {
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
        {posts ? (
          <div className="news-container container">
            <div className="news-post-container">
              {posts.items.map((post) => (
                <Post key={post.sys.id} post={post} />
              ))}
            </div>
            <div className="recent-post-container">
              <h2>Neueste Beiträge</h2>
              <hr className="recent-post-hr"></hr>
              {latestArticles(posts.items).map((post) => (
                <RecentPost key={post.sys.id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </HelmetProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.userReducer.posts,
  };
};

export default connect(mapStateToProps)(News);
