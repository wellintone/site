"use client";

import Hamburger from "./Hamburger";
import { useRef, useState } from "react";
import { Links } from "@/utils/routes";
import NavbarLinkList from "./NavbarLinkList";
import logo from "../../../../public/img/logo.png";
import Switch from "../Switch/Switch";
import LogoWellintone from "../Logo/LogoWellintone";
import Dribble from "../Svgs/Dribble";
import Twitter from "../Svgs/Twitter";
import Linkedin from "../Svgs/Linkedin";
import Pinterest from "../Svgs/Pinterest";

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

      {/* NavbarList */}
      <NavbarLinkList
        links={Links}
        navRef={navRef}
        linkColor={linkColor}
        textBold={textBold}
        customClass="justify-start"
      />

      <div className="logo__container">
        <LogoWellintone />
      </div>
      {/* Contact Us */}

      <div className="socials__container">
        <Dribble />
        <Twitter />
        <Linkedin />
        <Pinterest />
      </div>

      {/* DARK AND LIGHT MODE */}
      {/* <Switch /> */}

      {/* Hamburger */}
      <Hamburger onToggleMenu={showNavbar} />
    </header>
  );
}

export default Navbar;
