"use client";
import { useOnScreen } from "@/hooks/useOnScreen";
import React, { useEffect, useMemo, useRef, useState } from "react";
export type IAnimateFadeIn = {
  children: React.ReactNode | React.ReactNode[];
  zIndex?: number;
  scrollVelocity?: number;
  init?: number;
  className?: string;
  height?: string;
  delay?: number;
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
  fadeIn = "base",
}: IAnimateFadeIn) => {
  const animateFadeInRef = useRef(null);
  const isOnScreen = useOnScreen(animateFadeInRef);

  const fadeInFrom = (
    fadeIn:
      | "top"
      | "bottom"
      | "left"
      | "right"
      | "base"
      | "scaleUp"
      | "scaleDown"
  ) => {
    return {
      from: fadeIn ? "on-fade-in-" + fadeIn : "on-fade-in-base",
      to: fadeIn ? "fade-in-" + fadeIn : "fade-in-base",
    };
  };

  return (
    <div
      ref={animateFadeInRef}
      className={`justify-center align-center ${className || ""} ${
        isOnScreen ? fadeInFrom(fadeIn).from : fadeInFrom(fadeIn).to
      } `}
    >
      {children}
    </div>
  );
};

export default AnimateFadeIn;
