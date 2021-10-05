import React from "react";
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
        <div className={s.user__description}>
          <p> Julia Shurygina</p>
          <p>Date of Birth: 1 march</p>
          <p>City: Voronezh</p>
          <p> Education: VSPU'12</p>
        </div>
      </article>
      <MyPosts/>
    </section>
  );
};
export default Profile;
