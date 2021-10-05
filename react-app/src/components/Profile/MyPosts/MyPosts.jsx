import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  return (
    <div className={s.my_posts}>
      <textarea placeholder={props.text}></textarea>
      <button>{props.button}</button>
      <Post message="Hello" count="13" />
      <Post message="Hi" count="12" />
    </div>
  );
};
export default MyPosts;
