import React, { useState } from "react";
import { Link } from "react-router-dom";

import TMSlogo from "./images/logo.svg";
import MiniLogo from "./images/minilogo.svg";
import NavItem from "./navItem";
import HamburgerIcon from "./images/hamburger.svg";

import {
  NavBar,
  NavLinks,
  DismissX,
  Logo,
  MobileMoreDetails,
  MobileNavBar,
  SubBar
} from "./navigation-styles";

export default function Navigation() {
  const [mobileMenu, setmMobileMenu] = useState(false);

  function showMobileMenu() {
    setmMobileMenu(!mobileMenu);
  }

  function hideMobileMenu() {
    setmMobileMenu(false);
  }

  return (
    <div>
      <NavBar mobileMenuShown={mobileMenu}>
        <NavLinks>
          <DismissX onClick={hideMobileMenu}>
            <span>✕</span>
          </DismissX>
          <NavItem path="/menu" action={hideMobileMenu}>
            Menu
          </NavItem>
          <NavItem path="/aboutus" action={hideMobileMenu}>
            About Us
          </NavItem>
        </NavLinks>
        <Logo>
          <Link to="/">
            <img src={TMSlogo} alt="The Meatball Stoppe logo" />
          </Link>
        </Logo>
        <NavLinks>
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.ladifferenzabakery.com"
            >
              Bakery
            </a>
          </li>
          <NavItem path="/media" action={hideMobileMenu}>
            Media
          </NavItem>
          <MobileMoreDetails />
        </NavLinks>
      </NavBar>
      <MobileNavBar>
        <span onClick={showMobileMenu}>
          <img src={HamburgerIcon} alt="Menu icon" />
        </span>
        <Link to="/">
          <img src={MiniLogo} alt="The Meatball Stoppe logo" />
        </Link>
        <div />
      </MobileNavBar>
      <SubBar />
    </div>
  );
}
