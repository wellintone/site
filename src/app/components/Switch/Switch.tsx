"use client";
import React, { useState } from "react";

const Switch = () => {
  const [checked, setCheck] = useState(false);

  return (
    <div className="theme-switch-wrapper">
      <span id="toggle-icon">
        <span className="toggle-text">
          {checked ? "Light Mode" : "Dark Mode"}
        </span>
        <span>{checked ? "🌙" : "☀️"}</span>
      </span>
      <label className="theme-switch">
        <input
          className="switch"
          type="checkbox"
          id="toggle"
          checked={checked}
          onChange={(e: any) => setCheck(e?.target.checked)}
        />
        <div className="switch round"></div>
      </label>
    </div>
  );
};

export default Switch;
