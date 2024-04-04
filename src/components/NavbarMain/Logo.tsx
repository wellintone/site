import Image, { StaticImageData } from "next/image";

interface ICustomNavLink {
  route: string;
  src: StaticImageData;
  alt: string;
}

const Logo = ({ route, src, alt }: ICustomNavLink) => {
  return (
    <a className="logo__container">
      <Image className="logo__img" src={src} alt={alt} />
    </a>
  );
};

export default Logo;
