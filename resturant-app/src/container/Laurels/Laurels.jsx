import React from "react";
import "./Laurels.css";
import laurelLogo from "../../Asset/logo.png";
import spoon from "../../Asset/spoon.png";
import { award2, award1, award5, award3 } from "./exportAwards";
import laurelImg from "../../Asset/laurels.png";

const Laurels = () => {
  return (
    <div className="app__laurels app__bg" id="awards">
      <div className="app__laurels-logo">
        <img src={laurelLogo} alt="laurel logo" />
      </div>

      <div className="center">
        <div className="app__laurels-content flex__center">
          <div className="app__laurels-content-left">
            <div className="app__laurels-content-p">
              <p className="p__cormorant">Awards & recognition</p>
              <img src={spoon} alt="menu__spoon" className="spoon__img" />
            </div>

            <h1 className="app__laurels-content-h1">Our Laurels</h1>

            <div className="app__laurels-content-awards">
              <div>
                <img src={award2} alt="award o2" />
                <div className="app__laurels-content-awards-text">
                  <h1 className="laurel__h1">Bib Gourmond</h1>

                  <p className="laurel__p">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>

              <div className="app__laurels-content-awards-award-5">
                <img src={award1} alt="award 01" />
                <div className="app__laurels-content-awards-text">
                  <h1 className="laurel__h1">Rising Star</h1>

                  <p className="laurel__p">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="app__laurels-content-awards-bottom">
              <div>
                <img src={award5} alt="award 05" />
                <div className="app__laurels-content-awards-text">
                  <h1 className="laurel__h1">AA Hospitality </h1>

                  <p className="laurel__p">
                    Lorem ipsum dolor sit amet, consectetur.
                  </p>
                </div>
              </div>

              <div className="app__laurels-content-awards-award-3">
                <div>
                  <img src={award3} alt="award 03" />
                  <div className="app__laurels-content-awards-text">
                    <h1 className="laurel__h1">Outstanding Chef</h1>

                    <p className="laurel__p">
                      Lorem ipsum dolor sit amet, consectetur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="app__laurels-content-right">
            <img src={laurelImg} alt="vitamin G" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laurels;
