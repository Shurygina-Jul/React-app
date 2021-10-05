import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.my_posts}>
      <textarea></textarea>
      <button>Add post</button>
      <Post />
      <Post />
    </div>
  );
};
export default MyPosts;
