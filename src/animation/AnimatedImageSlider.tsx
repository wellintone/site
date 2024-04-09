"use client";
import { useAnimation } from "@/context/AnimationContext";
import React, { useEffect, useMemo, useRef, useState } from "react";
export type IAnimateSliderIn = {
  children: React.ReactNode | React.ReactNode[];
  zIndex?: number;
  scrollVelocity?: number;
  init?: number;
  className?: string;
  height?: string;
  delay?: number;
  style?: any;
  scale: any;
  sliderIn?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "base"
    | "scaleUp"
    | "scaleDown";
};

const AnimateSliderIn = ({
  children,
  init = 0,
  zIndex = 10,
  height = "100%",
  className,
  delay = 0,
  sliderIn,
  scale,
  style,
}: IAnimateSliderIn) => {
  const animateSliderInRef = useRef(null);
  const [slideInType, setSliderInType] = useState({ from: "", to: "" });
  const { setDirection, count } = useAnimation();
  const [scaleU, setScale] = useState(scale);
  const [myDelay, setMyDelay] = useState(delay);

  useEffect(() => {
    if (sliderIn) {
      setSliderInType({
        from: "on-slider-in-" + sliderIn,
        to: "slider-in-" + sliderIn,
      });
      setDirection(sliderIn);
    }
  }, [sliderIn]);

  /* useEffect(() => {
    if (scale) {
      setScale(scale.from);

      setTimeout(() => {
        setScale(scale.to);
      }, 1000);
    }
  }, [scale.from]); */

  useEffect(() => {
    setMyDelay(0);

    setTimeout(() => {
      setMyDelay(2);
    }, delay * 100);
  }, [count]);

  return (
    <div
      ref={animateSliderInRef}
      style={
        {
          /*  overflow: "hidden", */
          transition: `all ${myDelay}s ease-in-out`,
          zIndex: zIndex,
          /* scale: scaleU, */
        } as React.CSSProperties
      }
      className={`animatedSliderIn justify-center align-center ${
        className || ""
      }   `}
    >
      {children}
    </div>
  );
};

export default AnimateSliderIn;
