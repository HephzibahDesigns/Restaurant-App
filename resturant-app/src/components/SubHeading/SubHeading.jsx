import React from "react";
import "./SubHeading.css";
import spoon from "../../Asset/spoon.png";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
