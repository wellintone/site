import { LinksType } from "@/types/links";
import NavbarLink from "./NavbarLink";

interface ICustomNavLink {
  navRef: string;
  linkColor?: string;
  textBold?: number;
  links: LinksType[];
  customClass?: string;
  onClick: () => void;
}

const NavbarLinkList = ({
  navRef,
  links,
  customClass,
  onClick,
}: ICustomNavLink) => {
  return (
    <nav ref={navRef} className={`navbarLinkList ${customClass}`}>
      {links.map(({ name, route }: LinksType) => (
        <NavbarLink key={name} route={route} onClick={onClick}>
          {name}
        </NavbarLink>
      ))}
    </nav>
  );
};

export default NavbarLinkList;
