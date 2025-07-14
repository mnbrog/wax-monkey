// File: src/components/Nav.jsx

import React, { useState } from "react";
import { NavBar, NavLinks, LogoWrapper, Hamburger } from "./styles";

const Nav = ({ active }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    if (menuOpen) {
      setProductsOpen(false);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <NavBar>
      <LogoWrapper>
        {/* This link now correctly points to the top of the home page */}
        <a href="/" onClick={closeMenu}>
          <img
            src="/images/Upright Medical Solutions Logo.png"
            alt="Upright Medical Solutions"
          />
        </a>
      </LogoWrapper>

      <Hamburger
        onClick={toggleMenu}
        className={menuOpen ? "open" : ""}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </Hamburger>

      <NavLinks className={menuOpen ? "open" : ""}>
      <li>
        {/* The "Home" link also points to the top of the home page */}
        <a href="/" className={active === "home" ? "active" : ""}>
          Home
        </a>
      </li>

      <li className={`dropdown ${productsOpen ? "open" : ""}`}>
        <button
          onClick={() => setProductsOpen((prev) => !prev)}
          className={`dropdown-toggle ${active === "fall-risk" || active === "pulse4pulse" ? "active" : ""}`}
        >
          Products
        </button>
        <ul className="dropdown-menu">
          <li>
            {/* This link navigates to the top of the Fall Risk page */}
            <a href="/fall-risk" onClick={closeMenu} className={active === "fall-risk" ? "active" : ""}>
              Fall Risk
            </a>
          </li>
          <li>
            {/* This link navigates to the top of the Pulse4Pulse page */}
            <a href="/Pulse4Pulse" onClick={closeMenu} className={active === "pulse4pulse" ? "active" : ""}>
              Pulse4Pulse
            </a>
          </li>
        </ul>
      </li>

      <li>
        {/* This correctly links to the "About" section on the home page */}
        <a href="/#about" onClick={closeMenu} className={active === "about" ? "active" : ""}>
          About
        </a>
      </li>
      <li>
        {/* This correctly links to the "Contact" section on the home page */}
        <a href="/#contact" onClick={closeMenu} className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </li>
    </NavLinks>
  </NavBar>
  );
};

export default Nav;