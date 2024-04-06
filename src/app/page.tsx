import Image from "next/image";
import React from "react";
import ProfilePicture from "../../public/img/developer-pic-1.png";
import AnimatedText from "@/animation/AnimatedText";
import FluidContainer from "@/components/molecolar/FluidContainer";
import Link from "next/link";
import Button from "@/components/button";
import AnimateFadeIn from "@/animation/AnimateFadeIn";
import HireMe from "@/components/HireMe/HireMe";

const Home = () => {
  return (
    <main className="home align-center justify-center w-full">
      <FluidContainer minWidth="22rem" className="pt-0">
        <AnimateFadeIn className="w-full" fadeIn="scaleDown">
          <Image
            src={ProfilePicture}
            alt="Wellintone"
            className="w-full h-auto"
          />
        </AnimateFadeIn>
        <div className="column gap-1">
          <AnimatedText
            staggerChildren={true}
            onLoadPage={true}
            bouncingY={true}
            as="h1"
            className="text-start line-h-10 -mt-1"
          >
            Turning Vision Into Reality With Code And Design.
          </AnimatedText>

          <AnimatedText
            bouncingY={true}
            delay={10}
            as="p"
            className="justify-start text-start"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            labore explicabo libero commodi sequi delectus saepe, et suscipit
            veritatis aliquid itaque, voluptatum dolores, dolorum ut aspernatur.
            Nostrum dolorum vero tempora!
          </AnimatedText>
          <AnimatedText
            className="font-xs align-center pt-1"
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
    </main>
  );
};

export default Home;
