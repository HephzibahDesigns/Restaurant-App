import React from "react";
import spoon from "../../Asset/spoon.png";
import knife from "../../Asset/knife.png";
import G from "../../Asset/G.png";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus flex__center section__padding app__bg"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content-about">
          <h1 className="app__aboutus-content-about-h1">About Us</h1>
          <img src={spoon} alt="about__spoon" className="spoon__img" />

          <p className="p__opensans app__aboutus-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>

          <button type="button" className="app__aboutus-btn">
            Know More
          </button>
        </div>

        <div className="app__aboutus-content-knife flex__center">
          <img src={knife} alt="knife" />
        </div>

        <div className="app__aboutus-content-history">
          <h1 className="app__aboutus-content-history-h1">Our History</h1>
          <img src={spoon} alt="about__spoon" className="spoon__img" />

          <p className="p__opensans app__aboutus-p">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>

          <button type="button" className="app__aboutus-btn">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
