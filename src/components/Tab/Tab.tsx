import React, { useEffect } from "react";
import Button from "../Buttons/button";

const Tab = () => {
  useEffect(() => {
    const c = document.querySelectorAll(".cont");
    let head = document.querySelector(".tab__header");
    c.forEach((el: any, index: number) => {
      const iDiv = document.createElement("button");
      iDiv.innerHTML = (index + 1).toString();
      iDiv.id = (index + 1).toString();
      iDiv.className = "btn";
      head?.appendChild(iDiv);
    });
    console.log("c", c);
  }, []);
  return (
    <div style={{ height: "500px", width: "100%", border: "1px solid red" }}>
      <div className="tab__header"></div>
      <div
        className="tab__content"
        style={{ height: "500px", width: "100%", border: "1px solid blue" }}
      >
        <div
          style={{ height: "100%", width: "100%", border: "1px solid green" }}
          className="cont"
        >
          sono il primo
        </div>
        <div
          style={{ height: "100%", width: "100%", border: "1px solid yellow" }}
          className="cont"
        >
          sono il secondo
        </div>
        <div
          style={{ height: "100%", width: "100%", border: "1px solid orange" }}
          className="cont"
        >
          sono il terzo
        </div>
      </div>
    </div>
  );
};

export default Tab;
