import React from "react";
import "./postPage.css";
import {useLocation} from "react-router-dom";
import Post from "../../components/Post/post";

const PostPage = ()=>{
    const location = useLocation();
    const {id,date, image, title, text} = location.state;
    return (
        <div className="postPage-container container">
            <Post id={id} date={date}image={image} title={title} text={text}/>
        </div>
    );
}

export default PostPage;