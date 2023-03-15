import React from "react";
import { SubHeading } from "../../components/export3";
import welcome from "../../Asset/welcome.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper-info">
        <SubHeading title="Chase the new Flavour" />

        <h1 className="app__header-h1">The key to Fine dining</h1>

        <p className="p__opensans app__header-p">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>

        <button type="submit" className="app__header-btn">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper-img">
        <img src={welcome} alt="header-img" />
      </div>
    </div>
  );
};

export default Header;
