import React from "react";

const Colors = () => {
  return (
    <div className="w-container">
      <h1 className="text-white">Design system</h1>

      <section id="colors">
        <h1 className="text-white">
          <span>01</span>Colors
        </h1>

        <div>
          <div className="bg-dark text-white p-3  b-1-solid-white">#0B0D17</div>
          <p className="text-white">
            <span className="text-accent">RGB </span>11, 13, 23
          </p>
          <p className="text-white">
            <span className="text-accent">HSL </span>230°, 35%, 7%
          </p>
        </div>
      </section>
    </div>
  );
};

export default Colors;
