import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ className: "react-icons", color: "#000" }}>
        <div className="navbar-light">
          <div className="container-light-nav w-container">
            <div className="navbar-light-brand w-nav-brand">
              <Link
                to="/"
                className="company-name-block"
                onClick={closeMobileMenu}
              >
                PRINTABLES
              </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <span className="navbar-banner" />
            <nav
              className={
                click ? "nav-menu w-nav-menu active" : "nav-menu w-nav-menu"
              }
            >
              <Link
                to="/start"
                className="nav-link w-nav-link"
                onClick={closeMobileMenu}
              >
                start
              </Link>
              <Link
                to="/pricing"
                className="nav-link w-nav-link"
                onClick={closeMobileMenu}
              >
                pricing
              </Link>
              <Link
                to="/about"
                className="nav-link w-nav-link"
                onClick={closeMobileMenu}
              >
                about
              </Link>
              <Link
                to="/login"
                className="navbar-light-navbutton w-button"
                onClick={closeMobileMenu}
              >
                sign up / log in
              </Link>
            </nav>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
