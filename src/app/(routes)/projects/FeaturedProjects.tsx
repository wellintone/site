import Button from "@/components/Buttons/button";
import Linkedin from "@/components/Svgs/Linkedin";
import Image from "next/image";
import Link from "next/link";
import { type } from "os";
import React from "react";

const FeaturedProjects = ({ type, title, summary, img, link, github }: any) => {
  return (
    <article className="featured-projects">
      <Link
        href={link}
        target="_blank"
        className="featured-projects__container-image"
      >
        <Image src={img} alt={title} className="featured-projects__image" />
      </Link>
      <div className="featured-projects__content">
        <h3 className="featured-projects__type">{type}</h3>
        <Link href={link} target="_blank" className="featured-projects__title">
          <h2>{title}</h2>
        </Link>
        <p className="featured-projects__description">{summary}</p>
        <div className="featured-projects__footer">
          <Link href={github} target="_blank" className="icon">
            <Linkedin />
          </Link>
          <Link href={link} target="_blank">
            <Button>Visit Project</Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
