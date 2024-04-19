"use client";
import { useOnScreen } from "@/hooks/useOnScreen";
import { init } from "next/dist/compiled/webpack/webpack";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  style,
}: any) => {
  const refLine = useRef(null);
  const onScreen = useOnScreen(refLine);
  const [h, setHeight] = useState(0);

  useEffect(() => {
    if (onScreen) {
      window.addEventListener("scroll", (e: any) => {
        if (refLine) {
          const l = refLine?.current?.getBoundingClientRect();

          if ((((window.scrollY - l.bottom) / l.height) * 100) / 2 <= 100) {
            setHeight(
              (((window.scrollY - l.bottom - 100) / l.height) * 100) / 2
            );
          }
          console.log(
            "((window.scrollY - l.bottom + 500) / l.height) * 100 - 90",
            ((window.scrollY - l.bottom + 500) / l.height) * 100 - 90
          );
        }
      });
    }
  }, [onScreen]);
  return (
    <li
      style={style}
      className="my-6 mx-auto w[60%] column align-center justify-between"
    >
      <div className="ps-r ">
        <div
          id="line"
          className="mt-0 ps-a h-full w[10px]"
          style={{
            backgroundColor: "#ff5c5c",
            top: "10px",
            right: "calc(100% + 20px)",
            height: `calc(${h}% - 125px)`,
          }}
        ></div>
        <div
          ref={refLine}
          id="line"
          className="mt-0 ps-a h-full w[10px] "
          style={{
            backgroundColor: "transparent",
            top: "10px",
            height: `calc(100% - 125px)`,
          }}
        ></div>
        <div
          className="point ps-a b-radius-full b-8-solid-primary h[50px] w[50px] top[7px] "
          style={{ background: "white", left: "-70px" }}
        ></div>
        <h3 className="font-900 text-2xl">
          {position}&nbsp;
          <a target="_blank" className="text-primary " href={companyLink}>
            @{company}
          </a>
        </h3>
        <span className="font-500 text-on-background">
          {time} | {address}
        </span>
        <p className="font-500 w-full">{work}</p>
      </div>
    </li>
  );
};

const Experiences = () => {
  return (
    <div className="my-4 justify-between align-center column ps-r">
      <h1 className="justify-center font-xl text-on-background w-full">
        Experiences
      </h1>

      <div className="max-auto ps-r w[75%] h[100%] display-f">
        <ul className="w-full column justify-between align-start ml-1">
          <Details
            style={{ marginTop: "0px" }}
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2021-2023"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ea alias, rem, hic modi labore veritatis beatae necessitatibus, aliquid molestias magnam soluta commodi quas vitae est dolores a officia obcaecati."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2021-2023"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ea alias, rem, hic modi labore veritatis beatae necessitatibus, aliquid molestias magnam soluta commodi quas vitae est dolores a officia obcaecati."
          />
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2021-2023"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ea alias, rem, hic modi labore veritatis beatae necessitatibus, aliquid molestias magnam soluta commodi quas vitae est dolores a officia obcaecati."
          />
          <Details
            style={{ marginBottom: "0px" }}
            position="Software Engineer"
            company="Google"
            companyLink="www.google.com"
            time="2021-2023"
            address="Mountain View, CA"
            work="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ea alias, rem, hic modi labore veritatis beatae necessitatibus, aliquid molestias magnam soluta commodi quas vitae est dolores a officia obcaecati."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
