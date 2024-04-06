"use client";

import { useOnScreen } from "@/hooks/useOnScreen";
import { ElementType, HTMLAttributes, FC } from "react";
import React, { useRef } from "react";

interface IAnimatedText extends HTMLAttributes<HTMLOrSVGElement> {
  children: string | React.ReactNode | React.ReactNode[];
  className?: string;
  delay?: number;
  bouncingY?: boolean;
  bouncingX?: boolean;
  onLoadPage?: boolean;
  staggerChildren?: boolean;
  as?: ElementType;
}

const AnimatedText: React.FC<IAnimatedText> = ({
  children,
  className,
  delay = 0,
  bouncingY = false,
  bouncingX = false,
  onLoadPage = false,
  staggerChildren = false,
  as: Tag = "p",
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

  const typeOfAnimatedText = () => {
    if (typeof children == "string" && staggerChildren) {
      return children?.split(" ").map((word, index) => {
        return (
          <span
            ref={animateRef}
            key={word + "-" + index}
            style={{ "--delay": index } as React.CSSProperties}
            className={`
      display-i-b text-on-background ${checkCustomClass()}`}
          >
            <Tag className={className}>{word}&nbsp;</Tag>
          </span>
        );
      });
    } else if (typeof children == "string") {
      return (
        <span
          ref={animateRef}
          style={{ "--delay": delay } as React.CSSProperties}
          className={`
      display-i-b text-on-background ${checkCustomClass()}`}
        >
          <Tag className={className}>{children}&nbsp;</Tag>
        </span>
      );
    } else {
      return (
        <span
          ref={animateRef}
          style={{ "--delay": delay } as React.CSSProperties}
          className={`display-i-b text-on-background ${className} ${checkCustomClass()}`}
        >
          {children}
        </span>
      );
    }
  };

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
      {typeOfAnimatedText()}
    </div>
  );
};

export default AnimatedText;
