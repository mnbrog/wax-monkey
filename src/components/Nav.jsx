import React, { useState } from "react";
import { NavBar, NavLinks, LogoWrapper, Hamburger, CloseIcon } from "./styles";

const Nav = ({ active }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBar>
      <LogoWrapper>
        <a href="/">
          <img
            src="/images/wax-monkey-logo.jpg"
            alt="Wax Monkey Logo"
          />
        </a>
      </LogoWrapper>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <div />}
      </Hamburger>

      <NavLinks className={isOpen ? "open" : ""}>
        <li>
          <a href="/" className={active === "home" ? "active" : ""}>
            Home
          </a>
        </li>

        <li>
          <a href="https://bnds.us/kcehy8" className={active === "shows" ? "active" : ""}>
            Shows
          </a>
        </li>

        <li>
          <a href="/about" className={active === "about" ? "active" : ""}>
            About
          </a>
        </li>

        <li>
          <a href="https://www.bonfire.com/store/wax-monkey/" className={active === "merch" ? "active" : ""}>
            Merch
          </a>
        </li>
                <li>
          <a href="/contact" className={active === "booking" ? "active" : ""}>
            Booking
          </a>
        </li>
      </NavLinks>
    </NavBar>
  );
};

export default Nav;