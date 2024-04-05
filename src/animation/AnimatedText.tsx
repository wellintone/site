"use client";

import { useOnScreen } from "@/hooks/useOnScreen";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface IAnimatedText {
  children: string | React.ReactNode | React.ReactNode[];
  className?: string;
  delay?: number;
  bouncingY?: boolean;
  bouncingX?: boolean;
  onLoadPage?: boolean;
}

const AnimatedText: React.FC<IAnimatedText> = ({
  children,
  className,
  delay = 0,
  bouncingY = false,
  bouncingX = false,
  onLoadPage = false,
}) => {
  const animateRef = useRef(null);
  const isOnScreen = useOnScreen(animateRef);

  const checkCustomClass = () => {
    let customClass = "wordAnimated";
    if (bouncingY) {
      customClass = "wordAnimated-bounceY";
    } else if (bouncingX) {
      customClass = "wordAnimated-bounceX";
    } else {
      customClass = "wordAnimated";
    }

    return customClass;
  };

  console.log("IS", isOnScreen);
  return (
    <div
      className={`w-full align-center justify-start ${
        onLoadPage
          ? "show-animated-text"
          : isOnScreen
          ? "show-animated-text"
          : "animated-text"
      }`}
    >
      {typeof children == "string" ? (
        children?.split(" ").map((word, index) => {
          return (
            <span
              ref={animateRef}
              key={word + "-" + index}
              style={{ "--delay": index } as React.CSSProperties}
              className={`
              display-i-b ${className} text-on-background ${checkCustomClass()}`}
            >
              {word}&nbsp;
            </span>
          );
        })
      ) : (
        <span
          ref={animateRef}
          style={{ "--delay": delay } as React.CSSProperties}
          className={`display-i-b ${className} text-on-background ${checkCustomClass()}`}
        >
          {children}
        </span>
      )}
    </div>
  );
};

export default AnimatedText;
