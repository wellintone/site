"use client";
import React, {
  ElementType,
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

interface IAnimatedCursorChild extends HTMLAttributes<HTMLOrSVGElement> {
  children: string | React.ReactNode | React.ReactNode[];
  className?: string;
  delay?: number;
  onLoadPage?: boolean;
  as?: ElementType;
  shift?: number;
}

const AnimatedCursorChild: React.FC<IAnimatedCursorChild> = ({
  children,
  className,
  delay = 0,
  onLoadPage = false,
  as: Tag = children?.type,
  shift = 10,
}) => {
  const [axis, setAxis] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const findParent = document.getElementsByClassName(
      "animation-cursor-parent"
    );

    if (findParent.length) {
      findParent[0].addEventListener("mousemove", (e: any) => {
        let rect = e.currentTarget.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        setAxis({ x, y });
      });
    }
  }, [shift]);
  return (
    <Tag
      className={`animated_cursor_child justify-center align-center w-full h-full ${className}`}
      style={{
        transform: `
    translate(${axis.x / shift}px, ${axis.y / shift}px)`,
      }}
    >
      {children}&nbsp;
    </Tag>
  );
};

export default AnimatedCursorChild;
