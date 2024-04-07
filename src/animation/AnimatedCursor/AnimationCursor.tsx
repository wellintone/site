"use client";

import { useRef } from "react";

export type IAnimationCursor = {
  children: React.ReactNode | React.ReactNode[];
  zIndex?: number;
  scrollVelocity?: number;
  init?: number;
  customClass?: string;
  height?: string;
  shift?: number;
};

const AnimationCursor = ({ children, customClass }: IAnimationCursor) => {
  const animationCursorRef = useRef(null);

  return (
    <div
      ref={animationCursorRef}
      className={`animation-cursor-parent w-full h-full justify-center align-center b-1px-solid-red ${
        customClass || ""
      }`}
    >
      {children ? (
        Array.isArray(children) ? (
          children.map((element: any, index: any) => {
            return element.props.className === "animated_cursor_child" ? (
              <div className="ps-r" key={element + index}>
                {element}
              </div>
            ) : (
              <div key={element + index}>{children[index]}</div>
            );
          })
        ) : (
          <div className="ps-r">{children}</div>
        )
      ) : (
        []
      )}
    </div>
  );
};

export default AnimationCursor;
