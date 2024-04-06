import React from "react";

export interface ISpin {
  children: React.ReactNode | React.ReactNode;
  speed?: number;
  className?: string;
}

const Spin: React.FC<ISpin> = ({ children, speed = 3.5, className }) => {
  return (
    <span
      className={`spin ${className || ""}`}
      style={{ "--speed": speed } as React.CSSProperties}
    >
      {children}
    </span>
  );
};

export default Spin;
