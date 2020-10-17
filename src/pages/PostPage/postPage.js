import React, { useEffect, useRef } from "react";
import "./postPage.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Post from "../../components/Post/post";

const PostPage = () => {
  const refToPost = useRef(null);

  useEffect(() => {
    refToPost.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  });

  const location = useLocation();
  const { id, date, image, title, text } = location.state;

  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="description"
          content="Praxis für Physiotherapie in Darmstadt bietet Krankengymnastik Manuelle Lymphdrainage KG Neuro Massage Craniomandibuläre Dysfunktionen Heiß- und Kalttherapie"
        />
      </Helmet>
      <div className="postPage-container container" ref={refToPost}>
        <Post id={id} date={date} image={image} title={title} text={text} />
      </div>
    </HelmetProvider>
  );
};

export default PostPage;
