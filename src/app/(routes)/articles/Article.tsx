import link from "next/link";
import Link from "next/link";
import React from "react";

const Article = ({ link, title, date }: any) => {
  return (
    <li className="article">
      <Link className="article__title" href={link} target="_blank">
        <h2>{title}</h2>
      </Link>
      <span className="article__date">{date}</span>
    </li>
  );
};

export default Article;
