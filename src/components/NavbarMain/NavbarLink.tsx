"use client";
import { AnimationChangePage } from "@/animation/AnimationChangePage/AnimationChangePage";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface ICustomNavLink {
  route: string;
  children: string | JSX.Element | JSX.Element[];
}

const NavbarLink = ({ route, children }: ICustomNavLink) => {
  const currentPath = usePathname();
  const router = useRouter();
  const [trans, setTransition] = useState(false);

  const waitToChange = () => {
    const el = document.getElementById("transP");
    el?.classList.remove("transitionPageTest");
    el?.classList.add("animateTransitionPageTest");
    setTransition(true);
    setTimeout(() => {
      el?.classList.add("transitionPageTest");
      el?.classList.remove("animateTransitionPageTest");
      router.push(route);
      setTransition(false);
    }, 1000);
  };
  return (
    <div className="navbarLink">
      <div className="route" onClick={() => waitToChange()}>
        {children}
      </div>
      <span
        className={`bottom__line ${currentPath === route ? "activated" : ""}`}
      ></span>
    </div>
  );
};

export default NavbarLink;
