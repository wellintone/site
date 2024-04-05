import React, { Children } from "react";

export type IFluidContainer = {
  children: React.ReactNode[] | React.ReactNode;
  classNameChildren?: string;
  direction?: string;
  breakPoints?: string;
  style?: any;
};

const FluidContainer = ({
  style,
  children,
  classNameChildren,
  breakPoints,
  direction = "row",
}: IFluidContainer) => {
  return (
    <div
      className={`fluidcontainer ${direction || ""}  justify-start`}
      style={style}
    >
      {Array.isArray(children) ? (
        children.map((c: React.ReactNode, index: number) => {
          return (
            <div
              key={index}
              className={`justify-center align-center col-12-xs col-6-sm col-4-md col-3-xl  ${
                classNameChildren || ""
              }`}
            >
              {c}
            </div>
          );
        })
      ) : (
        <div
          className={` ${
            direction || "row"
          }  justify-center align-center col-12-xs col-6-sm col-4-md col-3-xl  ${
            classNameChildren || ""
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default FluidContainer;
