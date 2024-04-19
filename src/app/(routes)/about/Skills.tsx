import ProgressBar from "@/components/ProgressBar/ProgressBar";
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
    <div className="skills">
      <h1 className="skills__title h1">Skills</h1>

      <div className="skills__wrapper">
        <span>
          {ProgrammingData.map((skill: any, idx: number) => {
            return (
              <div key={idx}>
                <ProgressBar
                  label={skill.name}
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
        </span>
        <span>
          {MarketingData.map((skill: any, idx: number) => {
            return (
              <div key={idx}>
                <ProgressBar
                  label={skill.name}
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
        </span>
      </div>
    </div>
  );
};
