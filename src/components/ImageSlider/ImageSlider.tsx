"use client";
import AnimateFadeIn from "@/animation/AnimateFadeIn";
import { url } from "inspector";
import Image from "next/image";
import { useEffect, useState } from "react";
/* import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react"; */

type ImageSliderProps = {
  children: React.ReactNode[] | React.ReactNode;
};

export function ImageSlider({ children }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState<
    | "right"
    | "left"
    | "top"
    | "bottom"
    | "base"
    | "scaleUp"
    | "scaleDown"
    | undefined
  >("base");

  function showNextImage() {
    setDirection(() => "right");
    if ("right") {
      setImageIndex((index) => {
        if (index === children.length - 1) return 0;
        return index + 1;
      });
    }
  }

  function showPrevImage() {
    setDirection(() => "left");
    if ("left") {
      setImageIndex((index) => {
        if (index === 0) return children.length - 1;
        return index - 1;
      });
    }
  }

  return (
    <section
      aria-label="Image Slider"
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        className="imageslidercontainer"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        {/* <ArrowBigLeft aria-hidden /> */}
        {"<"}
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        {">"}
      </button>
      {/* <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          translate: "-50%",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? "O" : "O1"}
          </button>
        ))}
      </div> */}
      <div id="after-image-slider-controls" />
    </section>
  );
}
