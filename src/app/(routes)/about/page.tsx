import AnimatedText from "@/animation/AnimatedText";
import AnimationCursor from "@/animation/AnimatedCursor/AnimationCursor";
import FluidContainer from "@/components/molecolar/FluidContainer";
import React from "react";
import AnimatedCursorChild from "@/animation/AnimatedCursor/AnimatedCursorChild";

const About = () => {
  return (
    <main className="w-full h-screen column align-center justify-center">
      <AnimationCursor>
        <FluidContainer>
          <AnimatedCursorChild shift={50} as="h1">
            <AnimatedText
              staggerChildren={true}
              className="justify-center"
              as="h1"
            >
              Passion Fuels Purpose!
            </AnimatedText>
          </AnimatedCursorChild>
        </FluidContainer>
      </AnimationCursor>
    </main>
  );
};

export default About;
