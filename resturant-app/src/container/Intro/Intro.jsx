import React from "react";
import "./Intro.css";
import Meal from "../../Asset/meal.mp4";

const Intro = () => {
  return (
    <div className="app__intro">
      <video src={Meal} autoPlay loop muted className="app__intro-video" />
    </div>
  );
};

export default Intro;
