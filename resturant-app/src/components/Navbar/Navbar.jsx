import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../../Asset/gericht.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt=" logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>

        <li className="p__opensans">
          <a href="#about">About</a>
        </li>

        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>

        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>

        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log in / registration
        </a>

        <div />
        <a href="/" className="p__opensans">
          book table
        </a>
      </div>

      {/* Mobile Menu  */}

      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <GiHamburgerMenu
            fontSize={27}
            color="fff"
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdClose
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(true);
              }}
            />
            <ul className="app__navbar-smallsreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>

              <li className="p__opensans">
                <a href="#about">About</a>
              </li>

              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>

              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>

              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
