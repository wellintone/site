import ProgressBar from "@/animation/ProgressBar";
import React, { useEffect, useMemo } from "react";

const ProgrammingData = [
  {
    name: "Javascript",
    percentage: 90,
  },
  {
    name: "CSS",
    percentage: 80,
  },
  {
    name: "React",
    percentage: 90,
  },
];
const MarketingData = [
  {
    name: "SEO",
    percentage: 70,
  },
  {
    name: "Google Analytics",
    percentage: 50,
  },
  {
    name: "Figma",
    percentage: 60,
  },
];

export const Skills = () => {
  return (
    <div className="w-full mt-4">
      <h1 className="justify-center font-xl text-on-background w-full">
        Skills
      </h1>

      <div className="mt-4 w-full align-start justify-center g-16">
        <div className="w[50%] column ">
          {ProgrammingData.map((skill: any, idx: number) => {
            return (
              <div key={idx} className="my-2">
                <div className="label txt-4xl color-on-background">
                  {skill.name}
                </div>
                <ProgressBar
                  position="bottom"
                  width={skill.percentage}
                  hasIncreaseNumber={true}
                  symbol="%"
                  bgColor="#ff5c5c"
                  color="#424242"
                />
              </div>
            );
          })}
        </div>
        <div className="w[50%] column">
          {MarketingData.map((skill: any, idx: number) => {
            return (
              <div key={idx} className="my-2">
                <div className="label txt-4xl color-on-background">
                  {skill.name}
                </div>
                <ProgressBar
                  position="bottom"
                  width={skill.percentage}
                  hasIncreaseNumber={true}
                  symbol="%"
                  bgColor="#ff5c5c"
                  color="#424242"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
