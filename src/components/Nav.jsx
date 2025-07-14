// File: src/components/Nav.jsx

import React from "react";
import { NavBar, NavLinks, LogoWrapper } from "./styles";

const Nav = ({ active }) => (
  <NavBar>
    <LogoWrapper>
      {/* This link now correctly points to the top of the home page */}
      <a href="/">
        <img
          src="/images/Upright Medical Solutions Logo.png"
          alt="Upright Medical Solutions"
        />
      </a>
    </LogoWrapper>

    <NavLinks>
      <li>
        {/* The "Home" link also points to the top of the home page */}
        <a href="/" className={active === "home" ? "active" : ""}>
          Home
        </a>
      </li>

      <li className="dropdown">
        <a
          href="#"
          className={`dropdown-toggle ${active === "fall-risk" || active === "pulse4pulse" ? "active" : ""}`}
        >
          Products
        </a>
        <ul className="dropdown-menu">
          <li>
            {/* This link navigates to the top of the Fall Risk page */}
            <a href="/fall-risk" className={active === "fall-risk" ? "active" : ""}>
              Fall Risk
            </a>
          </li>
          <li>
            {/* This link navigates to the top of the Pulse4Pulse page */}
            <a href="/Pulse4Pulse" className={active === "pulse4pulse" ? "active" : ""}>
              Pulse4Pulse
            </a>
          </li>
        </ul>
      </li>

      <li>
        {/* This correctly links to the "About" section on the home page */}
        <a href="/#about" className={active === "about" ? "active" : ""}>
          About
        </a>
      </li>
      <li>
        {/* This correctly links to the "Contact" section on the home page */}
        <a href="/#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </li>
    </NavLinks>
  </NavBar>
);

export default Nav;