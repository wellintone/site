import React, { Children } from "react";

export type IContainer = {
  children: React.ReactNode[] | React.ReactNode;
  customClass?: string;
  direction?: string;
};

const Container = ({
  children,
  customClass,
  direction = "row",
}: IContainer) => {
  return (
    <div className={`${direction || "row"} ${customClass} container `}>
      {children}
    </div>
  );
};

export default Container;
