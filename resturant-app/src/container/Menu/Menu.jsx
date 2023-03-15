import React from "react";
import "./Menu.css";
import spoon from "../../Asset/spoon.png";
import { MenuItem } from "../../components/export3";

const Menu = () => {
  return (
    <div className="app__menuitem flex__center section__padding" id="menu">
      <div className="app__menuitem-content flex__center">
        <p className="p__cormorant">Menu that fits you palatte</p>
        <img src={spoon} alt="menu__spoon" className="spoon__img" />

        <h1 className="app__menuitem-content-h1">Today’s Special</h1>

        <div className="app__menuitem-content-menu flex__center">
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default Menu;
