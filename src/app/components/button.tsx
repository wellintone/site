import React from "react";

export type IButton = {
  type?: string;
  textColor?: string;
  customClass?: string;
  children: React.ReactNode;
};

const Button = ({
  type = "btn-secondary",
  textColor = "text-white",
  customClass,
  children,
}: IButton) => {
  return (
    <button className={`${type} ${textColor} ${customClass} font-w-900`}>
      {children}
    </button>
  );
};

export default Button;
