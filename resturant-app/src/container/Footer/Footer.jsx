import React from "react";
import "./Footer.css";
import spoon from "../../Asset/spoon.png";
import instagram from "../../Asset/instagram.png";
import twitter from "../../Asset/twitter.png";
import facebook from "../../Asset/facebook.png";

const Footer = () => {
  return (
    <div className="app__footer app__bg  section__padding">
      <div className="flex__center">
        <div className="app__footer-newsletter">
          <p className="p__cormorant">Newsletter</p>
          <img src={spoon} alt="FindUs spoon" />

          <h1 className="app__footer-newsletter-h1">
            Subscribe to Our Newsletter
          </h1>

          <p className="p__opensans">And never miss latest Updates!</p>

          <div className="app__footer-newsletter-email">
            <input type="text" placeholder="Email Address" />

            <button type="submit" className="app__footer-newsletter-btn">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="app__footer-details">
        <div className="app__footer-details-contact">
          <h1>Contact Us</h1>
          <p className="p__details address">
            9 W 53rd St, New York, NY 10019, USA
          </p>

          <div className="number">
            <p className="p__details">+1 212-344-1230 </p>
            <p className="p__details">+1 212-555-1230</p>
          </div>
        </div>

        <div className="app__footer-details-gericht">
          <h1 className="app__footer-details-gericht-h1">Gerícht</h1>
          <p className="p__details">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={spoon} alt="FindUs spoon" />

          <div className="app__footer-details-gericht-socials">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>

        <div className="app__footer-details-working">
          <h1 className="app__footer-details-working-h1">Working Hours</h1>
          <div className="app__footer-details-working-weekday">
            <p className="p__details">Monday-Friday:</p>

            <p className="p__details">08:00 am -12:00 am</p>
          </div>

          <div className="app__footer-details-working-weekend">
            <p className="p__details">Saturday-Sunday:</p>
            <p className="p__details">07:00am -11:00 pm</p>
          </div>
        </div>
      </div>

      <p className="p__details flex__center">
        2021 Gerícht. All Rights reserved.
      </p>
    </div>
  );
};

export default Footer;
