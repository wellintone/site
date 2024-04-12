"use client";
import React, { FC, useCallback, useEffect, useState } from "react";

export interface IIncreaseNumber {
  num: number;
  time: number;
  symbol?: string;
  className?: string;
}

const IncreaseNumber: FC<IIncreaseNumber> = ({
  num,
  time,
  symbol,
  className,
}) => {
  const [inc, setInc] = useState(0);

  useEffect(() => {
    let interval = setTimeout(function () {
      if (inc < num) {
        setInc((prev) => prev + 1);
      }
    }, time);
    if (inc == num) clearTimeout(interval);
  }, [inc, num, time]);

  return (
    <div className={className}>
      {inc}
      {symbol || ""}
    </div>
  );
};

export default IncreaseNumber;
