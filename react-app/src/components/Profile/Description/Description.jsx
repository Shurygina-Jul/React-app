import React from "react";
import s from "./Description.module.css";
import DescriptionItem from "./DescriptionItem/DescritionItem";

const Description = (props) => {
  return (
    <div className={s.user__description}>
      <DescriptionItem name="Julia Shurygina" />
      <DescriptionItem name="Date of Birth: 1 march" />
      <DescriptionItem name="City: Voronezh" />
      <DescriptionItem name="Education: VSPU'12" />
    </div>
  );
};
export default Description;
