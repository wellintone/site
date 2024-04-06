import React from "react";

export type IButton = {
  type?: string;
  textColor?: string;
  className?: string;
  children: React.ReactNode;
};

const Button = ({
  type = "btn-secondary",
  textColor = "text-white",
  className,
  children,
}: IButton) => {
  return (
    <button className={`${type} ${textColor} ${className} font-w-900`}>
      {children}
    </button>
  );
};

export default Button;
