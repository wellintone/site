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
  fadeIn,
}: IAnimateFadeIn) => {
  const animateFadeInRef = useRef(null);
  const [fadeInType, setFadeInType] = useState("fade-in-base");
  const isOnScreen = useOnScreen(
    animateFadeInRef,
    document.getElementsByClassName("imageslidercontainer")[0],
    animateFadeInRef?.current?.parentNode.id
  );

  useEffect(() => {
    if (fadeIn || animateFadeInRef?.current?.parentNode.id) {
      if (isOnScreen) {
        setFadeInType(() => "fade-in-" + fadeIn);

        setTimeout(() => {
          setFadeInType(() => "on-fade-in-" + fadeIn);
        }, delay * 1000);
      }
    }
  }, [fadeIn, animateFadeInRef?.current?.parentNode.id, isOnScreen]);

  return (
    <div
      ref={animateFadeInRef}
      style={{ transition: `all ${delay}s ease-in` } as React.CSSProperties}
      className={`animatedFadeIn justify-center align-center ${
        className || ""
      }  ${fadeInType}`}
      /* ${isOnScreen ? fadeInType.from : fadeInType.to}  */
    >
      {children}
    </div>
  );
};

export default AnimateFadeIn;
