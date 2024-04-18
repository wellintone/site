import React from "react";
import { BUTTON_SIZES, BUTTON_TYPE, BUTTON_VARIANTS } from "./enums";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
  size?: BUTTON_SIZES;
  type?: "submit" | "reset" | "button";
  hasShadow?: boolean;
  status?: string;
  className?: string;
  onClick?: (arg?: any) => void;
}

const Button = ({
  children,
  variant = BUTTON_VARIANTS.Primary,
  size = BUTTON_SIZES.Small,
  type = BUTTON_TYPE.Button,
  hasShadow = false,
  className,
  onClick,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`btn btn-${variant} btn-${size} ${
        hasShadow ? "btn-shadow" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
