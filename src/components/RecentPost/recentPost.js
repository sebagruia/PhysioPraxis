import React from "react";
import "./recentPost.css";
import { useHistory } from "react-router-dom";
import {arangedTitle} from "../../DATA";

const RecentPost = ({id, date, image, title, text}) => {

    const history = useHistory();
  
    const toPostPage = () => {
      history.push(`/news/${arangedTitle(title)}`, { id, date, image, title, text });
    };

  return (
    <div className="recent-post" >
      <div onClick = {toPostPage} className="recent-post-image-container" role="button">
        <img src={image} alt="post" />
      </div>

      <div className="recent-post-text">
        <p>{date}</p>
        <p onClick = {toPostPage} role="button">{title}</p>
      </div>
    </div>
  );
};

export default RecentPost;
