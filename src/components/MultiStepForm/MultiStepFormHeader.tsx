"use client";
import React from "react";
import { useMultiStepForm } from "./MultiStepForm";
import Button from "../Buttons/button";

const MultiStepFormHeader = ({ children }: any) => {
  const { setDirection } = useMultiStepForm();
  return (
    <div className="display-f  w[100%] b-1-solid-red">
      <Button className="mx-2" onClick={() => setDirection("indietro")}>
        Indietro
      </Button>
      <Button className="mx-2" onClick={() => setDirection("avanti")}>
        Avanti
      </Button>
      {children}
    </div>
  );
};

export default MultiStepFormHeader;
