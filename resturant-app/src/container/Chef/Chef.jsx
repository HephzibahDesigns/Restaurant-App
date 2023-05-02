import React from "react";
import "./Chef.css";
import mrChef from "../../Asset/chef.png";
import spoon from "../../Asset/spoon.png";
import quote from "../../Asset/quote.png";

const Chef = () => {
  return (
    <div className="app__chef app__bg section__padding">
      <div className="app__chef-total">
        <div className="app__chef-left">
          <img src={mrChef} alt="chef" />
        </div>

        <div className="app__chef-right">
          <div className="app__chef-right-p">
            <p className="p__cormorant">Chef’s Word</p>
            <img src={spoon} alt="spoon" />

            <h1 className="P__cormorant2">What we believe in</h1>

            <div className="app__chef-right-p-quote-cover">
              <div className="app__chef-right-p-quote">
                <img src={quote} alt="quote" />

                <p className="opensan2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
                  sit .
                </p>
              </div>

              <p className="opensan2 p__width">
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
                sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
                molestie lectus eu. Congue iaculis integer curabitur semper sit
                nunc.
              </p>
            </div>

            <div className="app__chef-right-name">
              <hi className="P__cormorant3">Kevin Luo</hi>
              <p className="p__opensans2">Chef & Founder</p>
            </div>

            <h1 className="app__chef-right-signature">Kevin Luo</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
