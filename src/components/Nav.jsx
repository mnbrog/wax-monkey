// File: src/components/Nav.jsx

import React from "react";
import { NavBar, NavLinks, LogoWrapper } from "./styles";

const Nav = ({ active }) => (
  <NavBar>
    <LogoWrapper>
      <img
        src="/images/Upright Medical Solutions Logo.png"
        alt="Upright Medical Solutions"
      />
    </LogoWrapper>
    <NavLinks>
      <li>
        <a href="#hero" className={active === "hero" ? "active" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="#need-screen" className={active === "need-screen" ? "active" : ""}>
          Need to Screen
        </a>
      </li>
      <li>
        <a href="#fra-overview" className={active === "fra-overview" ? "active" : ""}>
          What is FRA?
        </a>
      </li>
      <li>
        <a href="#fra-research" className={active === "fra-research" ? "active" : ""}>
          FRA Research
        </a>
      </li>
      <li>
        <a href="#who-we-help" className={active === "who-we-help" ? "active" : ""}>
          Who We Help
        </a>
      </li>
      <li>
        <a href="#about" className={active === "about" ? "active" : ""}>
          About
        </a>
      </li>
      <li>
        <a href="#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </li>
    </NavLinks>
  </NavBar>
);

export default Nav;
