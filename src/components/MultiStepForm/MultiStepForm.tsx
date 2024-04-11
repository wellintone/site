"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

type MultiStepFormContextProviderProps = {
  steps: any;
  children: ReactNode | ReactNode[];
};

type MultiStepFormContext = {
  direction: string;
  setDirection: (direction: string) => void;
  previousStep: any;
  setPreviousStep: any;
  currentStep: any;
  setCurrentStep: any;
};

export const MultiStepFormContext = createContext<MultiStepFormContext | null>(
  null
);

export const MultiStepForm = ({
  children,
  steps,
}: MultiStepFormContextProviderProps) => {
  const [direction, setDirection] = useState<string>("");

  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  return (
    <MultiStepFormContext.Provider
      value={{
        direction,
        setDirection,
        previousStep,
        setPreviousStep,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};

export const useMultiStepForm = () => {
  const context = useContext(MultiStepFormContext);

  if (!context) {
    throw new Error(
      "useMultiStepFormContext must be used within a MultiStepFormContextProvider"
    );
  }

  return context;
};
