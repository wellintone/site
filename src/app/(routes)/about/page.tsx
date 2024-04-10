"use client";

import AnimatedText from "@/animation/AnimatedText";
import AnimationCursor from "@/animation/AnimatedCursor/AnimationCursor";
import FluidContainer from "@/components/molecolar/FluidContainer";
import React from "react";
import AnimatedCursorChild from "@/animation/AnimatedCursor/AnimatedCursorChild";
import first from "../../../../public/img/bachelor.jpg";
import second from "../../../../public/img/hair1.jpg";
import third from "../../../../public/img/developer-pic-2.jpg";
import fourth from "../../../../public/img/developer-pic-1.png";
import fifth from "../../../../public/img/right.jpg";
import { Animation } from "@/context/AnimationContext";
import Test from "./test";
import AnimationImageSlider from "../../../animation/AnimationSlider/AnimationImageSlider";

const IMAGES = [
  { url: first, alt: "Car One" },
  { url: second, alt: "Car Two" },
  { url: third, alt: "Car Three" },
  { url: fourth, alt: "Car Four" },
  { url: fifth, alt: "Car Five" },
];

const About = () => {
  return (
    <main className="w-full h-min-screen column align-center justify-center">
      <AnimationCursor>
        <FluidContainer>
          <AnimatedCursorChild shift={50} as="h1">
            <AnimatedText
              staggerChildren={true}
              className="justify-center"
              as="h1"
            >
              Passion Fuels Purpose!
            </AnimatedText>
          </AnimatedCursorChild>
        </FluidContainer>
      </AnimationCursor>

      <Animation>
        <AnimationImageSlider>
          {IMAGES.map(({ url, alt }, index) => (
            <Test
              style={{
                maxWidth: "1200px",
                width: "100%",
                aspectRatio: "10 / 6",
                margin: "0 auto",
              }}
              key={index}
              index={index}
              url={url}
              alt={alt}
            />
          ))}
        </AnimationImageSlider>
      </Animation>
    </main>
  );
};

export default About;
