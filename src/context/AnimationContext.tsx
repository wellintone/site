"use client";
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
  setNumber: any;
  setAnimation: React.Dispatch<React.SetStateAction<string>>;
  count: number;
};

export const AnimationContext = createContext<AnimationContext | null>(null);

export const Animation = ({ children }: AnimationContextProviderProps) => {
  const [count, setNumber] = useState<number>(0);
  const [animation, setAnimation] = useState<string>("fadeIn");
  const [direction, setDirection] = useState<string>("");

  const animationRef = useRef();

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
        setDirection,
        setNumber,
      }}
    >
      {children}
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
