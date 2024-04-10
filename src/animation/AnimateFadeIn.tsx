"use client";
import { useAnimation } from "@/context/AnimationContext";
import React, { useEffect, useMemo, useRef, useState } from "react";
export type IAnimateFadeIn = {
  children: React.ReactNode | React.ReactNode[];
  zIndex?: number;
  scrollVelocity?: number;
  init?: number;
  className?: string;
  height?: string;
  delay?: number;
  shiftMount: number;
  fadeIn?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "base"
    | "scaleUp"
    | "scaleDown";
};

const AnimateFadeIn = ({
  children,
  init = 0,
  zIndex = 10,
  height = "100%",
  className,
  delay = 0,
  fadeIn,
  shiftMount = 0,
}: IAnimateFadeIn) => {
  const animateFadeInRef = useRef(null);
  const { count, direction } = useAnimation();

  const [shi, setShift] = useState(shiftMount);
  const [myDelay, setMyDelay] = useState(delay);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setShift(shiftMount);
    setMyDelay(0);
    setOpacity(0);

    setTimeout(() => {
      setShift(0);
      setOpacity(1);
      setMyDelay(delay);
    }, delay * 100);
  }, [count]);

  const fadeDirection = useMemo(() => {
    let fade = undefined;
    fadeIn === "left"
      ? (fade = `translateX(${-shi}px)`)
      : fadeIn === "right"
      ? (fade = `translateX(${shi}px)`)
      : direction === "left"
      ? (fade = `translateX(${-shi}px)`)
      : direction === "right"
      ? (fade = `translateX(${shi}px)`)
      : undefined;
    return fade;
  }, [fadeIn, direction, shi]);

  return (
    <div
      ref={animateFadeInRef}
      style={
        {
          opacity: opacity,
          transition: `all ${myDelay}s ease-in`,
          zIndex: zIndex,
          transform: fadeDirection,
        } as React.CSSProperties
      }
      className={`animatedFadeIn justify-center align-center ${
        className || ""
      }   `}
    >
      {children}
    </div>
  );
};

export default AnimateFadeIn;
