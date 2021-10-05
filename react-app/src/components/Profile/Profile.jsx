import React from "react";
import Description from "./Description/Description";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <section className={s.profile}>
      <div className={s.profile__photo}>
        <img src="/images/mint.jpg" alt="profile"></img>
      </div>
      <article className={`${s.profile__user} ${s.user}`}>
        <div className={s.user__avatar}>
          <img src="/images/avatar.jpg" alt="avatar"></img>
        </div>
        <Description/>
      </article>
      <MyPosts button="Add post" text="Enter your message" />
    </section>
  );
};
export default Profile;
