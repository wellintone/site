"use client";
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
  const [inView, setInView] = useState(false);

  const animateRef = useRef(null);
  const options = useMemo(() => {
    return {
      root: null,
      threshold: 0,
      delay: delay,
    };
  }, [delay]);
  const observer = useMemo(() => {
    const ob = new IntersectionObserver(function (entries, observer) {
      setTimeout(() => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      }, delay * 100);
    }, options);

    return ob;
  }, [delay, options]);

  useEffect(() => {
    observer.observe(animateRef.current as any);
  }, [observer]);
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
          inView ? "show-animate" : "animate"
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Animate;
