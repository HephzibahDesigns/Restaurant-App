import React from "react";
import "./MenuItem.css";

import drinks from "../../Asset/menu.png";

const MenuItem = () => {
  return (
    <div className="app__menuitem">
      <div className="app__menuitem-content">
        <div className="app__menuitem-content-wine">
          <h1 className="app__menuitem-content-wine-h1">Wine & Beer</h1>

          {/* first table */}
          <div>
            <div className="app__menuitem-content-wine-p">
              <p className="p__font font1">Chapel Hill Shiraz</p>
              <div className="line"></div>
              <p className="p__cormorant">$56</p>
            </div>
            <p className="app__menuitem-content-col p__openfont">AU | Bottle</p>
          </div>

          <div>
            <div className="app__menuitem-content-wine-p">
              <p className="p__font  font2">Catena Malbec </p>
              <div className="line"></div>
              <p className="p__cormorant">$59</p>
            </div>
            <p className="app__menuitem-content-col p__openfont">AR | Bottle</p>
          </div>

          <div>
            <div className="app__menuitem-content-wine-p">
              <p className="p__font font2">La Vieille Rosé</p>
              <div className="line"></div>
              <p className="p__cormorant">$44</p>
            </div>
            <p className="app__menuitem-content-col p__openfont">FR | 750 ml</p>
          </div>

          <div>
            <div className="app__menuitem-content-wine-p">
              <p className="p__font  font2">Rhino Pale Ale</p>
              <div className="line"></div>
              <p className="p__cormorant">$31</p>
            </div>
            <p className="app__menuitem-content-col p__openfont">CA | 750 ml</p>
          </div>

          <div>
            <div className="app__menuitem-content-wine-p">
              <p className="p__font font2">Irish Guinness</p>
              <div className="line"></div>
              <p className="p__cormorant">$26</p>
            </div>
            <p className="app__menuitem-content-col p__openfont">IE | 750 ml</p>
          </div>
        </div>
      </div>

      <div className="app__menuitem-img">
        <img src={drinks} alt="menu" />
      </div>

      {/* second table */}

      <div className="app__menuitem-content">
        <div className="app__menuitem-content-wine">
          <h1 className="app__menuitem-content-wine-h1">Cocktails</h1>

          <div>
            <div className="app__menuitem-content-cocktail-p">
              <p className="p__font fontspace">Aperol Spritz</p>
              <div className="line"></div>
              <p className="p__cormfont">$20</p>
            </div>

            <p className="app__menuitem-content-col p__openfont">
              Aperol | Villa Marchesi prosecco | soda | 30ml
            </p>
          </div>

          <div>
            <div className="app__menuitem-content-cocktail-p">
              <p className="p__font fontspace2">Dark 'N' Stormy</p>
              <div className="line"></div>
              <p className="p__cormfont">$16</p>
            </div>

            <p className="app__menuitem-content-col p__openfont">
              Dark rum | Ginger beer | Slice of lime.
            </p>
          </div>

          <div>
            <div className="app__menuitem-content-cocktail-p">
              <p className="p__font fontspace3">Daiquiri</p>
              <div className="line"></div>
              <p className="p__cormfont">$10</p>
            </div>

            <p className="app__menuitem-content-col p__openfont">
              Rum | Citrus juice | Sugar
            </p>
          </div>

          <div>
            <div className="app__menuitem-content-cocktail-p">
              <p className="p__font fontspace4">Old Fashioned</p>
              <div className="line"></div>
              <p className="p__cormfont">$31</p>
            </div>

            <p className="app__menuitem-content-col p__openfont">
              Bourbon | Brown sugar | Angostura Bitters
            </p>
          </div>

          <div>
            <div className="app__menuitem-content-cocktail-p">
              <p className="p__font fontspace5">Negroni</p>
              <div className="line "></div>
              <p className="p__cormfont">$26</p>
            </div>

            <p className="app__menuitem-content-col p__openfont">
              Gin | Sweet Vermouth | Campari | Orange garnish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
