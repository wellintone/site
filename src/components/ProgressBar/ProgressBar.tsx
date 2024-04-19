import React, { FC, useEffect, useMemo } from "react";
import IncreaseNumber from "../../animation/IncreaseNumber";

export interface IProgressBar {
  width?: number;
  symbol?: string;
  color?: string;
  bgColor?: string;
  hasIncreaseNumber?: boolean;
  position?: "top" | "bottom";
  label?: string;
}

const ProgressBar: FC<IProgressBar> = ({
  width = 0,
  symbol,
  color = "black",
  bgColor = "grey",
  hasIncreaseNumber,
  position = "top",
  label,
}) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      const p = document.getElementsByClassName("progress-percentage");
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
    <div className="progress">
      <div className="label-progressbar">{label}</div>
      {hasIncreaseNumber && (
        <span className="progress__number" id="percentage">
          <IncreaseNumber num={width} time={10} symbol={symbol} />
        </span>
      )}
      <div className="progress__wrapper">
        <div
          className="progress-percentage"
          style={{
            width: `${width}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
