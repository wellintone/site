"use client";
import React, { FC } from "react";
import { useMultiStepForm } from "./MultiStepForm";

const MultiStepBody = ({ children }: any) => {
  const { direction } = useMultiStepForm();
  return (
    <div>
      MultiStepBody {direction} {children}
    </div>
  );
};

export default MultiStepBody;
