"use client";

import React from "react";
import profilePic from "../../../../public/img/developer-pic-2.jpg";
import first from "../../../../public/img/bachelor.jpg";
import second from "../../../../public/img/hair1.jpg";
import third from "../../../../public/img/developer-pic-2.jpg";
import fourth from "../../../../public/img/developer-pic-1.png";
import fifth from "../../../../public/img/right.jpg";
import Image from "next/image";
import { Skills } from "./Skills";
import IncreaseNumber from "@/animation/IncreaseNumber";
import Experiences from "./Experiences";

const IMAGES = [
  { url: first, alt: "Car One" },
  { url: second, alt: "Car Two" },
  { url: third, alt: "Car Three" },
  { url: fourth, alt: "Car Four" },
  { url: fifth, alt: "Car Five" },
];

const About = () => {
  return (
    <main className="about">
      <h1 className="h1 about__title">Passion Fuels Purpose!</h1>
      <div className="about__wrapper">
        <div className="about__wrapper-biography">
          <h2 className="about__wrapper-biography-title">Biography</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis,
            maxime voluptates vero consequuntur alias ratione enim ullam quo.
            Non distinctio dolorum minus numquam architecto, alias id placeat?
            Nulla, eveniet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis,
            maxime voluptates vero consequuntur alias ratione enim ullam quo.
            Non distinctio dolorum minus numquam architecto, alias id placeat?
            Nulla, eveniet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis,
            maxime voluptates vero consequuntur alias ratione enim ullam quo.
            Non distinctio dolorum minus numquam architecto, alias id placeat?
            Nulla, eveniet!
          </p>
        </div>
        <div className="about__wrapper-photo">
          <Image
            src={profilePic}
            alt="Codebucks"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>

        <div className="about__wrapper-numbers">
          <div className="number-box">
            <IncreaseNumber className="number" num={50} time={50} symbol="+" />
            <p className="description">Satisfied Clients</p>
          </div>
          <div className="number-box">
            <IncreaseNumber className="number" num={6} time={200} symbol="+" />
            <p className="description">Years of experiences</p>
          </div>
          <div className="number-box">
            <IncreaseNumber className="number" num={40} time={50} symbol="+" />
            <p className="description">Projects Completed</p>
          </div>
        </div>
      </div>

      <Skills />
      <Experiences />
    </main>
  );
};

export default About;
