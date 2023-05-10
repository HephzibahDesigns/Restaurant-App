import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../../Asset/gericht.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt=" logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a
            className={activeTab === "home" ? "active" : " "}
            onClick={() => setActiveTab("home")}
            href="#home"
          >
            Home
          </a>
        </li>

        <li className="p__opensans">
          <a
            className={activeTab === "about" ? "active" : " "}
            onClick={() => setActiveTab("about")}
            href="#about"
          >
            About
          </a>
        </li>

        <li className="p__opensans">
          <a
            className={activeTab === "menu" ? "active" : " "}
            onClick={() => setActiveTab("menu")}
            href="#menu"
          >
            Menu
          </a>
        </li>

        <li className="p__opensans">
          <a
            className={activeTab === "awards" ? "active" : " "}
            onClick={() => setActiveTab("awards")}
            href="#awards"
          >
            Awards
          </a>
        </li>

        <li className="p__opensans">
          <a
            className={activeTab === "contact" ? "active" : " "}
            onClick={() => setActiveTab("contact")}
            href="#contact"
          >
            Contact
          </a>
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
                <a
                  className={activeTab === "home" ? "active2" : " "}
                  onClick={() => setActiveTab("home")}
                  href="#home"
                >
                  Home
                </a>
              </li>

              <li className="p__opensans">
                <a
                  className={activeTab === "about" ? "active2" : " "}
                  onClick={() => setActiveTab("about")}
                  href="#about"
                >
                  About
                </a>
              </li>

              <li className="p__opensans">
                <a
                  className={activeTab === "menu" ? "active2" : " "}
                  onClick={() => setActiveTab("menu")}
                  href="#menu"
                >
                  Menu
                </a>
              </li>

              <li className="p__opensans">
                <a
                  className={activeTab === "awards" ? "active2" : " "}
                  onClick={() => setActiveTab("awards")}
                  href="#awards"
                >
                  Awards
                </a>
              </li>

              <li className="p__opensans">
                <a
                  className={activeTab === "contact" ? "active2" : " "}
                  onClick={() => setActiveTab("contact")}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
