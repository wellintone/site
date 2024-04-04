import React from "react";

export type ISection = {
  children: React.ReactNode;
  customClass: string;
  direction?: string;
};

const Section = ({ children, customClass, direction }: ISection) => {
  return (
    <div className={`section ${customClass || ""} ${direction || "row"}`}>
      {children}
    </div>
  );
};

export default Section;
