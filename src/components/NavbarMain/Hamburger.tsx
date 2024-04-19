import React, { Fragment } from "react";

interface IHamburger {
  onToggleMenu: (toggle: boolean) => void;
  isResponsiveNav: boolean;
}

const Hamburger = ({ onToggleMenu, isResponsiveNav }: IHamburger) => {
  const handleChange = (event: any) => {
    if (event.target.checked) {
      onToggleMenu(false);
    } else {
      onToggleMenu(true);
    }
  };
  return (
    <label className="hamburger-menu">
      <input
        type="checkbox"
        checked={isResponsiveNav}
        onChange={handleChange}
      />
    </label>
  );
};

export default Hamburger;
