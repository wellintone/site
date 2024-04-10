"use client";
import { throttle } from "@/utils/functions";
import React, { useCallback, useEffect, useRef, useState } from "react";
export type IParallax = {
  children: React.ReactNode;
  zIndex?: number;
  scrollVelocity?: number;
  init?: number;
  customClass?: string;
  height?: string;
  scrollAxis?: "y" | "x";
  id: string;
};

const Parallax = ({
  children,
  init = 500,
  zIndex = 10,
  scrollVelocity = 0.2,
  height = "100%",
  scrollAxis = "y",
  customClass,
  id,
}: IParallax) => {
  const [scroll, setScroll] = useState(0);
  const [inView, setInView] = useState(false);
  const [refDimensions, setRefDimensions] = useState({ height: 0, width: 0 });

  const parallaxElement = useRef(null);
  const parallaxRef = useRef(null);

  const isScrolledIntoView = useCallback(
    (el: any) => {
      const rect = el.getBoundingClientRect();
      setRefDimensions({ height: rect.height, width: rect.width });
      setInView(
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
      setScroll(+(rect.top - document.documentElement.clientHeight) + init);
    },
    [init]
  );

  const scrollToAxis = () => {
    if (scrollAxis === "y") {
      return inView ? `translateY(${scroll * scrollVelocity}px)` : "";
    } else {
      return inView ? `translateX(${scroll * scrollVelocity}px)` : "";
    }
  };

  const handleScroll = useCallback(() => {
    isScrolledIntoView(parallaxElement.current);
  }, [isScrolledIntoView]);

  useEffect(() => {
    window.addEventListener("scroll", throttle(handleScroll, 50));

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div
      id={id}
      className={`text-center align-center justify-center `}
      style={{
        zIndex: zIndex,
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <span
        style={{
          opacity: 0,
          position: "absolute",
          border: "1px solid blue",
          height: height || refDimensions.height,
          width: refDimensions.width,
        }}
        className="text-center align-center"
        id="reference"
        ref={parallaxElement}
      ></span>
      <div
        ref={parallaxRef}
        className={`${customClass} parallaxContent`}
        style={{
          transform: scrollToAxis(),
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Parallax;
