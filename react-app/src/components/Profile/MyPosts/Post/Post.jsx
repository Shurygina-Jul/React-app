import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div className={s.post}>
      <div className={s.post_photo}>
        <img src="/images/avatar.jpg" alt="profile"></img>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        dignissimos obcaecati dicta maxime error placeat eligendi, eum cum magni
        voluptate soluta maiores repellat distinctio eius id illo. Quod,
        corporis explicabo!
      </p>
    </div>
  );
};
export default Post;
