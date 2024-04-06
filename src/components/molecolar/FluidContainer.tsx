import React, { Children } from "react";

export type IFluidContainer = {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  direction?: string;
  breakPoints?: string;
  style?: any;
  minWidth?: string;
};

const FluidContainer = ({
  style,
  children,
  className,
  breakPoints,
  direction,
  minWidth = "100%",
}: IFluidContainer) => {
  const customStyle = {
    ...style,
    "--minWidth": minWidth,
  };

  return (
    <div
      className={`fluidcontainer h-full w-full ${className}`}
      style={customStyle}
    >
      {Array.isArray(children) ? (
        children.map((c: React.ReactNode, index: number) => {
          return (
            <div
              key={index}
              className={`justify-center align-center col-12-xs col-6-sm col-4-md col-3-xl w-full`}
            >
              {c}
            </div>
          );
        })
      ) : (
        <div
          className={` ${
            direction || "row"
          }  justify-center align-center col-12-xs col-6-sm col-4-md col-3-xl w-full`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default FluidContainer;
