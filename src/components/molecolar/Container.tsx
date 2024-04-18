import React, { Children } from "react";

export type IContainer = {
  children: React.ReactNode[] | React.ReactNode;
  className?: string;
  direction?: string;
};

const Container = ({ children, className, direction = "row" }: IContainer) => {
  return <div className={`container ${className || ""}`}>{children}</div>;
};

export default Container;
