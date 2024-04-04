import React from "react";

export type ICardService = {
  title: string;
  desc: string;
  number: number;
};

const CardService1 = ({ title, desc, number }: ICardService) => {
  return (
    <div className="infographic-cards">
      <li className={`color-${number}`}>
        <i className="fa-regular fa-lightbulb"></i>
        <h5>{title}</h5>
        <h6>{desc}</h6>
        <div className="number-box">{"0" + number}</div>
      </li>
    </div>
  );
};

export default CardService1;
