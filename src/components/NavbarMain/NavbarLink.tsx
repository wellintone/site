import Link from "next/link";
import { usePathname } from "next/navigation";

interface ICustomNavLink {
  route: string;
  children: string | JSX.Element | JSX.Element[];
}

const NavbarLink = ({ route, children }: ICustomNavLink) => {
  const currentPath = usePathname();

  return (
    <div className="navbarLink">
      <Link className="route" href={`${route}`}>
        {children}
      </Link>
      <span
        className={`bottom__line ${currentPath === route ? "activated" : ""}`}
      ></span>
    </div>
  );
};

export default NavbarLink;
