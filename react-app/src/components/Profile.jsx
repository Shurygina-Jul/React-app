import React from "react";

const Profile = () => {
  return (
    <section className="profile">
      <div className="profile__photo">
        <img src="/images/mint.jpg" alt="profile"></img>
      </div>
      <article className="profile__user user">
        <div className="user__avatar">
          <img src="/images/avatar.jpg" alt="avatar"></img>
        </div>
        <div className="user__description">
          <p> Julia Shurygina</p>
          <p>Date of Birth: 1 march</p>
          <p>City: Voronezh</p>
          <p> Education: VSPU'12</p>
        </div>
      </article>
      <div className="my-posts">My post</div>
      <div className="my-posts">My post</div>
      <div className="my-posts">My post</div>
    </section>
  );
};
export default Profile;
