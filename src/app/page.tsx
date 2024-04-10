"use client";
import Image from "next/image";
import React from "react";
import ProfilePicture from "../../public/img/developer-pic-1.png";
import AnimatedText from "@/animation/AnimatedText";
import FluidContainer from "@/components/molecolar/FluidContainer";
import Link from "next/link";
import Button from "@/components/button";
import AnimateFadeIn from "@/animation/AnimateFadeIn";
import HireMe from "@/components/HireMe/HireMe";
import AnimationCursor from "@/animation/AnimatedCursor/AnimationCursor";
import AnimatedCursorChild from "@/animation/AnimatedCursor/AnimatedCursorChild";
import { Animation } from "@/context/AnimationContext";
import { AnimationChangePage } from "@/animation/AnimationChangePage/AnimationChangePage";

const Home = () => {
  return (
    <main className="home align-center justify-center w-full">
      <Animation>
        <AnimationCursor customClass="w-screen h-screen">
          <FluidContainer minWidth="22rem" className="pt-0">
            <AnimatedCursorChild as="div" shift={40}>
              <AnimateFadeIn
                shiftMount={0}
                className="w-full"
                fadeIn="scaleDown"
              >
                <Image
                  src={ProfilePicture}
                  alt="Wellintone"
                  className="w-full h-auto image__home"
                />
              </AnimateFadeIn>
            </AnimatedCursorChild>

            <div className="column gap-1">
              <AnimatedText
                staggerChildren={true}
                onLoadPage={true}
                bouncingY={true}
                as="h1"
                className=" line-h-10 -mt-1 justify-start"
              >
                Turning Vision Into Reality With Code And Design.
              </AnimatedText>

              <AnimatedText
                className="text-start"
                bouncingY={true}
                delay={10}
                as="p"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora labore explicabo libero commodi sequi delectus saepe, et
                suscipit veritatis aliquid itaque, voluptatum dolores, dolorum
                ut aspernatur. Nostrum dolorum vero tempora!
              </AnimatedText>
              <AnimatedText
                className="font-xs align-center pt-1 justify-start"
                delay={10}
                bouncingY={true}
              >
                <Button type="btn-primary" className="font-w-900 font-xs">
                  <Link href={"/dummy.pdf"} target={"_blank"} download={true}>
                    Resume
                  </Link>
                </Button>
                <Link href="mailto:abcd@gmail.com" className="ml-2">
                  Contact
                </Link>
              </AnimatedText>
            </div>
          </FluidContainer>

          <HireMe />
        </AnimationCursor>
      </Animation>
    </main>
  );
};

export default Home;
