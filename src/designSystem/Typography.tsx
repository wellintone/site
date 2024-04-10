import React from "react";

const Typography = () => {
  return (
    <div
      id="typography "
      className="b-1-solid-red"
      style={{ margin: "4rem 0" }}
    >
      <h1>
        <span>02</span>Typography
      </h1>

      <div className="w-flex">
        <div style={{ flexBasis: "100%" }}>
          <div>
            <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
            <p className="txt-9xl uppercase">Earth</p>
          </div>
          <div>
            <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
            <p className="txt-8xl uppercase">Venus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
