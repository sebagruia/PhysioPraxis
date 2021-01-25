import React from "react";
import "./recentPost.css";
import { useHistory } from "react-router-dom";
import {arangedTitle, formatDate} from "../../DATA";

const RecentPost = ({post}) => {

    const history = useHistory();
  
    const toPostPage = () => {
      history.push(`/news/${arangedTitle(post.fields.title)}`);
    };

  return (
    <div className="recent-post" >
      <div onClick = {toPostPage} className="recent-post-image-container" role="button">
        <img src={post.fields.image.fields.file.url} alt="post" />
      </div>

      <div className="recent-post-text">
        <p>{formatDate(post.fields.date)}</p>
        <p onClick = {toPostPage} role="button">{post.fields.title}</p>
      </div>
    </div>
  );
};

export default RecentPost;
