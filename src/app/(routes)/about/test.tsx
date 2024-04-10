import AnimateFadeIn from "@/animation/AnimateFadeIn";
import AnimateSliderIn from "@/animation/AnimatedImageSlider";
import Parallax from "@/animation/Parallax";
import Image from "next/image";
import React from "react";

const Test = ({ style, index, alt, url }: any) => {
  return (
    <div
      className="img-slider-img display-f w[100%]"
      style={{ transition: "all 1s ease-in-out", overflow: "hidden" }}
    >
      <div className="h[100%] w[100%]">
        <AnimateFadeIn
          shiftMount={200}
          zIndex={99}
          delay={0.6}
          className=" text-red font-lg"
        >
          IMAGES
        </AnimateFadeIn>
        <AnimateFadeIn
          shiftMount={200}
          zIndex={99}
          delay={0.9}
          className="text-red font-lg"
        >
          IMAGES22222
        </AnimateFadeIn>
      </div>

      <Image
        height={300}
        key={url}
        src={url}
        alt={alt}
        style={{ zIndex: -1 }}
        /* aria-hidden={index !== count} */
        className="img-slider-img ps-a"
      />
    </div>
  );
};

export default Test;
