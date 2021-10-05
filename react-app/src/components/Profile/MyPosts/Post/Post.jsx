import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <div className={s.post}>
        <div className={s.post_photo}>
          <img src="/images/avatar.jpg" alt="profile"></img>
        </div>
        <p>{props.message}</p>
      </div>
      <span> like {props.count}</span>
    </div>
  );
};
export default Post;
