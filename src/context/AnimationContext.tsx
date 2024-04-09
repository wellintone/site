"use client";
import { useOnScreen } from "@/hooks/useOnScreen";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type AnimationContextProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

/* type Animation = "fadeIn"; */

type AnimationContext = {
  animation: string;
  direction: string;
  animationRef: any;
  setDirection: any;
  triggerAnimation: boolean;
  setAnimation: React.Dispatch<React.SetStateAction<string>>;
  count: number;
};

export const AnimationContext = createContext<AnimationContext | null>(null);

export const Animation = ({ children }: AnimationContextProviderProps) => {
  const [animation, setAnimation] = useState<string>("fadeIn");
  const [count, setNumber] = useState<number>(0);
  const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);
  const [direction, setDirection] = useState<string>("");

  const animationRef = useRef();
  const inView = useOnScreen(animationRef);

  function showNextImage() {
    setNumber((index) => {
      setDirection("right");
      if (index === children.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setNumber((index) => {
      setDirection("left");
      if (index === 0) return children.length - 1;
      return index - 1;
    });
  }

  const toggleAnimation = () => {};

  useEffect(() => {
    if (count == +animationRef.current.id) {
      setTriggerAnimation(true);
    } else {
      setTriggerAnimation(false);
    }
  }, [count, direction]);
  useEffect(() => {
    if (direction) {
      setDirection(direction);
    }
  }, [direction]);

  return (
    <AnimationContext.Provider
      value={{
        animation,
        count,
        direction,
        setAnimation,
        animationRef,
        triggerAnimation,
        setDirection,
      }}
    >
      <section
        aria-label="Image Slider"
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <a href="#after-image-slider-controls" className="skip-link">
          Skip Image Slider Controls
        </a>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {children}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-btn"
          style={{ left: 0, zIndex: 999 }}
          aria-label="View Previous Image"
        >
          {"<"}
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-btn"
          style={{ right: 0, zIndex: 999 }}
          aria-label="View Next Image"
        >
          {">"}
        </button>
        <div id="after-image-slider-controls" />
      </section>
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error(
      "useAnimationContext must be used within a AnimationContextProvider"
    );
  }

  return context;
};
