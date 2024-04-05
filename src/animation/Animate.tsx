"use client";
import { useOnScreen } from "@/hooks/useOnScreen";
import React, { useEffect, useMemo, useRef, useState } from "react";
export type IAnimate = {
  children: React.ReactNode | React.ReactNode[];
  zIndex?: number;
  scrollVelocity?: number;
  init?: number;
  customClass?: string;
  height?: string;
  delay?: number;
};

const Animate = ({
  children,
  init = 0,
  zIndex = 10,
  height = "100%",
  customClass,
  delay = 0,
}: IAnimate) => {
  const animateRef = useRef(null);
  const isOnScreen = useOnScreen(animateRef);

  return (
    <div
      className={`text-center align-center justify-center `}
      style={{
        zIndex: zIndex,
        width: "100%",
        height: "100%",
      }}
    >
      <div
        ref={animateRef}
        className={`justify-center align-center ${customClass || ""} ${
          isOnScreen ? "show-animate" : "animate"
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Animate;
