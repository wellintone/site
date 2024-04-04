"use client";

import Logo from "./Logo";
import Hamburger from "./Hamburger";
import { useRef, useState } from "react";
import { Links } from "@/utils/routes";
import NavbarLinkList from "./NavbarLinkList";
import logo from "../../../../public/img/logo.png";

export type INavbar = {
  type?: string;
  linkColor?: string;
  textBold?: number;
  height?: 60;
  width?: 100;
};

function Navbar({ type, linkColor, textBold, height, width }: INavbar) {
  const navRef: any = useRef(null);

  const [isResponsiveNav, setIsResponsiveNav] = useState(false);

  const showNavbar = () => {
    navRef?.current?.classList.toggle("responsive_nav");
    setIsResponsiveNav(!isResponsiveNav);
  };

  return (
    <header className={`Navbar ${type ? "Navbar-" + type : ""} `}>
      {/* Logo */}
      <Logo route="/" src={logo} alt="logo Wellintone" />

      {/* NavbarList */}
      <NavbarLinkList
        links={Links}
        navRef={navRef}
        linkColor={linkColor}
        textBold={textBold}
      />

      {/* Contact Us */}
      {/*  <Button>Contattaci</Button> */}

      {/* Hamburger */}
      <Hamburger onToggleMenu={showNavbar} />
    </header>
  );
}

export default Navbar;
