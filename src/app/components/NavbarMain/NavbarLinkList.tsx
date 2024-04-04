import { LinksType } from "@/app/types/links";
import NavbarLink from "./NavbarLink";

interface ICustomNavLink {
  navRef: string;
  linkColor?: string;
  textBold?: number;
  links: LinksType[];
}

const NavbarLinkList = ({
  navRef,
  links,
  linkColor,
  textBold,
}: ICustomNavLink) => {
  return (
    <nav ref={navRef} className="navbarLinkList">
      <ul
        className={`links ${linkColor ? "text-" + linkColor : ""} ${
          textBold ? "font-w-" + textBold : ""
        }`}
      >
        {links.map(({ name, route }: LinksType) => (
          <NavbarLink key={name} route={route}>
            {name}
          </NavbarLink>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarLinkList;
