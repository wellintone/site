"use client";
import { useAnimation } from "@/context/AnimationContext";
import { useOnScreen } from "@/hooks/useOnScreen";
import { transform } from "next/dist/build/swc";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
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
  const [fadeInType, setFadeInType] = useState({ from: "", to: "" });
  const { count } = useAnimation();

  const [shi, setShift] = useState(shiftMount);
  const [myDelay, setMyDelay] = useState(delay);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (fadeIn) {
      setFadeInType({
        from: "on-fade-in-" + fadeIn,
        to: "fade-in-" + fadeIn,
      });
    }
  }, [fadeIn]);

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

  return (
    <div
      ref={animateFadeInRef}
      style={
        {
          opacity: opacity,
          transition: `all ${myDelay}s ease-in`,
          zIndex: zIndex,
          transform: `translateX(${fadeIn === "left" ? -shi : shi}px)`,
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
