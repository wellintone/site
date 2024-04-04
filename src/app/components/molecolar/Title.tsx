import React from "react";

export type ITitle = {
  children: React.ReactNode;
  customClass?: string;
};

const Title = ({ customClass, children }: ITitle) => {
  return <h1 className={`font-w-900  ${customClass}`}>{children}</h1>;
};

export default Title;
