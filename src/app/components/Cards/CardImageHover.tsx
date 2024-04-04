import Image from "next/image";
import React from "react";

export type ICardImageHover = {
  img: any;
  title: string;
  desc: string;
  customClass?: string;
};
const CardImageHover = ({ img, title, desc, customClass }: ICardImageHover) => {
  return (
    <div className={`card_image_hover ${customClass || ""}`}>
      <Image className="img" src={img} alt="portrait1" />

      <div className="content">
        <h2>{title}</h2>
        <p className="card__desc">{desc}</p>
      </div>
    </div>
  );
};

export default CardImageHover;
