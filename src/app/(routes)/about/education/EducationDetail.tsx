import React, { useEffect, useMemo, useRef, useState } from "react";
const EducationDetail = ({ position, address, time, work, style, id }: any) => {
  const refLine = useRef([]);

  const addToRef = (el: any) => {
    if (el && !refLine?.current?.includes(el)) {
      refLine.current.push(el);
    } else {
      return;
      w;
    }
  };

  useEffect(() => {
    const intersect = new IntersectionObserver((entries) => {
      entries.forEach((element: any) => {
        if (element.isIntersecting) {
          if (+id === document.querySelectorAll(".point__education").length) {
            element.target.style.height = `0%`;
          } else {
            element.target.style.height = `100%`;
          }
        }
      });
    });
    refLine.current.forEach((el: any) => {
      intersect.observe(el);
    });
  }, [id]);

  return (
    <li style={style} className="details">
      <div className="details__wrapper ">
        <div className="left-line">
          <div className="point__education"></div>
          <div ref={addToRef} id={`line ${id}`} className="line"></div>
        </div>
        <div className="content">
          <h3 className="name-company">{position}&nbsp;</h3>
          <span className="time-company">
            {time} | {address}
          </span>
          <p className="work-description">{work}</p>
        </div>
      </div>
    </li>
  );
};

export default EducationDetail;
