import React, { FC, useEffect, useMemo } from "react";
import IncreaseNumber from "./IncreaseNumber";

export interface IProgressBar {
  width?: number;
  symbol?: string;
  color?: string;
  bgColor?: string;
  hasIncreaseNumber?: boolean;
  position?: "top" | "bottom";
}

const ProgressBar: FC<IProgressBar> = ({
  width = 0,
  symbol,
  color = "black",
  bgColor = "grey",
  hasIncreaseNumber,
  position = "top",
}) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      const p = document.getElementsByClassName("progress");
      if (p) {
        for (let i = 0; i < p.length; i++) {
          p[i]?.classList.remove("progress");
          p[i]?.classList.add("startAnimation");
        }
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="ps-r" style={{ height: "auto" }}>
      {hasIncreaseNumber && (
        <span
          style={{
            textAlign: "right",
            color: color,
            right: "0px",
          }}
          id="percentage"
          className={`ps-a  ${position}[100%]`}
        >
          <IncreaseNumber
            className="txt-4xl"
            num={width}
            time={10}
            symbol={symbol}
          />
        </span>
      )}
      <div
        style={{
          backgroundColor: "transparent",
          border: `${3}px solid ${color} `,
          overflow: "hidden",
        }}
        className="ps-r b-radius-default h[50px] col-span-4 w-full"
      >
        <div
          className="progress ps-a  display-i-b h-full"
          style={{
            transition: "all 1s ease-in-out",
            backgroundColor: bgColor,
            overflow: "hidden",
            width: `${width}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
