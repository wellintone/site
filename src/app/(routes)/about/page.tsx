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
    <main className="w-full h-min-screen column align-start justify-start p[200px]">
      <h1 className="justify-center font-xl text-on-background w-full">
        Passion Fuels Purpose!
      </h1>
      <div className="grid w-full grid-cols-8 g-16 mt-4">
        <div className="col-span-3  align-start justify-start column">
          <h2 className="mb-3 mt-2 text-lg font-900 uppercase text-on-background">
            Biography
          </h2>

          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis,
            maxime voluptates vero consequuntur alias ratione enim ullam quo.
            Non distinctio dolorum minus numquam architecto, alias id placeat?
            Nulla, eveniet!
          </p>
          <p className="my-2 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis,
            maxime voluptates vero consequuntur alias ratione enim ullam quo.
            Non distinctio dolorum minus numquam architecto, alias id placeat?
            Nulla, eveniet!
          </p>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis,
            maxime voluptates vero consequuntur alias ratione enim ullam quo.
            Non distinctio dolorum minus numquam architecto, alias id placeat?
            Nulla, eveniet!
          </p>
        </div>
        <div className="col-span-3 ps-r h-max b-radius-25 b-2-solid-on-background p-4 shadowImage">
          <Image
            src={profilePic}
            alt="Codebucks"
            className="w-full h-auto b-radius-xs "
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>

        <div className="col-span-2 flex column align-end justify-between">
          <div className="column align-end justify-center">
            <span className="display-i-b txt-7xl font-w-900">
              <IncreaseNumber
                className="txt-7xl"
                num={50}
                time={50}
                symbol="+"
              />
            </span>
            <h2 className="txt-2xl">Satisfied Clients</h2>
          </div>
          <div className="my-4 column align-end justify-center">
            <span className="display-i-b txt-7xl font-w-900">
              <IncreaseNumber
                className="txt-7xl"
                num={40}
                time={50}
                symbol="+"
              />
            </span>
            <h2 className="txt-2xl">Projects Completed</h2>
          </div>
          <div className="column align-end justify-center">
            <span className="display-i-b txt-7xl font-w-900">
              <IncreaseNumber
                className="txt-7xl"
                num={6}
                time={200}
                symbol="+"
              />
            </span>
            <h2 className="txt-2xl">Years of experiences</h2>
          </div>
        </div>
      </div>

      <Skills />
      <Experiences />
    </main>
  );
};

export default About;
