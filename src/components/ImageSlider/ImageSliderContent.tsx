"use client";
import React, { useEffect, useState } from "react";

export interface IImageSliderContent {
  children: React.ReactNode | React.ReactNode[];
  id: string | number;
}

const ImageSliderContent: React.FC<IImageSliderContent> = ({
  children,
  id,
}) => {
  useEffect(() => {
    console.log("UD", id, children);
  }, [id]);
  return (
    <div
      /* id={`${100 * +id}`} */
      className="img-slider-img "
      /* style={{ translate: `${-100 * +id}%` }} */
      id={id.toString()}
    >
      {console.log("ID", id)}
      {children}
    </div>
  );
};

export default ImageSliderContent;
