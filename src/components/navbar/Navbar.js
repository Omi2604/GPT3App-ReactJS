import React, { useState } from "react";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

// BEM (css naming convention ) -> Block Element Modifier

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT-3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Study</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links__container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <p>
          <a href="#signIn">Sign in</a>{" "}
        </p>
        <button className="" type="button">
          Sign Up
        </button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="navbar-menu__container scale-up-center">
            <div className="navbar-menu__container-links">
              <Menu />
              <div className="navbar-menu__container-links-sign">
                <p>
                  <a href="#signIn">Sign in</a>
                </p>
                <button className="" type="button">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
