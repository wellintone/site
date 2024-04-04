import React, { Fragment } from "react";

interface IHamburger {
  onToggleMenu: (toggle: boolean) => void;
}

const Hamburger = ({ onToggleMenu }: IHamburger) => {
  const handleChange = (event: any) => {
    if (event.target.checked) {
      onToggleMenu(false);
    } else {
      onToggleMenu(true);
    }
  };
  return (
    <label className="hamburger-menu">
      <input type="checkbox" onChange={handleChange} />
    </label>
  );
};

export default Hamburger;
