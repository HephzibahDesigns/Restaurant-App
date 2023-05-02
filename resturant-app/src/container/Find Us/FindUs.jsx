import React from "react";
import "./FindUs.css";
import spoon from "../../Asset/spoon.png";
import findUs from "../../Asset/findus.png";

const FindUs = () => {
  return (
    <div className="app__findUs app__bg section__padding" id="contact">
      <div className="app__findUs-left">
        <div className="app__findUs-left-p">
          <p className="p__cormorant">Contact</p>
          <img src={spoon} alt="FindUs spoon" />

          <h1 className="app__findUs-left-h1">Find Us</h1>
        </div>

        <div className="app__findUs-left-opening">
          <p className="p__opensans app__findUs-left-opening-p">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>

          <h1 className="app__findUs-left-opening-h1">Opening Hours</h1>

          <p className="p__opensans app__findUs-left-opening-time-p1">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="p__opensans app__findUs-left-opening-time-p2">
            Sat - Sun: 10:00 am - 03:00 am
          </p>

          <button type="submit" className="app__findUs-left-opening-btn">
            Visit Us
          </button>
        </div>
      </div>

      <div className="app__findUs-right">
        <img src={findUs} alt="findUs img" />
      </div>
    </div>
  );
};

export default FindUs;
