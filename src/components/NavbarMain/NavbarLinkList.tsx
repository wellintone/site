import { LinksType } from "@/types/links";
import NavbarLink from "./NavbarLink";

interface ICustomNavLink {
  navRef: string;
  linkColor?: string;
  textBold?: number;
  links: LinksType[];
  customClass: string;
}

const NavbarLinkList = ({ navRef, links, customClass }: ICustomNavLink) => {
  return (
    <nav ref={navRef} className={`navbarLinkList ${customClass}`}>
      {links.map(({ name, route }: LinksType) => (
        <NavbarLink key={name} route={route}>
          {name}
        </NavbarLink>
      ))}
    </nav>
  );
};

export default NavbarLinkList;
