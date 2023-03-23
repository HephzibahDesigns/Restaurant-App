import React from "react";
import "./Chef.css";
import mrChef from "../../Asset/chef.png";
import spoon from "../../Asset/spoon.png";
import quote from "../../Asset/quote.png";

const Chef = () => {
  return (
    <div className="app__chef flex__center section__padding app__bg ">
      <div className="app__chef-body">
        <div className="app__chef-img ">
          <img src={mrChef} alt="chef" />
        </div>

        <div className="app__chef-details ">
          <div className="app__chef-details-p">
            <p className="p__cormorant">Chef’s Word</p>
            <img src={spoon} alt="menu__spoon" className="spoon__img" />

            <h1 className="app__chef-details-h1">What we believe in</h1>
          </div>

          <div className="app__chef-details-quote-sec">
            <div className="app__chef-details-quote">
              <img src={quote} alt="quote" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                sit .
              </p>
            </div>

            <p className="app__chef-details-quote-p">
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
              sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
              molestie lectus eu. Congue iaculis integer curabitur semper sit
              nunc.
            </p>
          </div>

          <div className="app__chef-details-signature">
            <h1 className="app__chef-details-signature-h1">Kevin Luo</h1>
            <p>Chef & Founder</p>

            <h1 className="app__chef-details-signature-name">Kevin Luo</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
