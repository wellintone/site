interface ICustomNavLink {
  route: string;
  children: string | JSX.Element | JSX.Element[];
}

const NavbarLink = ({ route, children }: ICustomNavLink) => {
  return (
    <li className={"navbarLink font-sm"}>
      <a href={`#${route}`}>{children}</a>
    </li>
  );
};

export default NavbarLink;
