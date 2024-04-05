import Image from "next/image";
import React from "react";
import ProfilePicture from "../../public/img/developer-pic-1.png";
import AnimatedText from "@/animation/AnimatedText";
import FluidContainer from "@/components/molecolar/FluidContainer";
import Link from "next/link";
import Button from "@/components/button";

const Home = () => {
  return (
    <main className="home align-center justify-center w-full">
      <FluidContainer classNameChildren="w-1I2 display-f align-center row justify-between">
        <div className="w-full">
          <Image
            src={ProfilePicture}
            alt="Wellintone"
            className="w-full h-auto"
          />
        </div>
        <div>
          <AnimatedText
            className="font-lg line-h-8 font-w-700"
            onLoadPage={true}
          >
            Turning Vision Into Reality With Code And Design.
          </AnimatedText>
          <AnimatedText delay={10} bouncingY={true}>
            <p className="justify-start text-start pt-1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              labore explicabo libero commodi sequi delectus saepe, et suscipit
              veritatis aliquid itaque, voluptatum dolores, dolorum ut
              aspernatur. Nostrum dolorum vero tempora!
            </p>
          </AnimatedText>
          <AnimatedText
            className="font-xs mt-2 align-center"
            delay={10}
            bouncingX={true}
          >
            <Button type="btn-primary" customClass="font-w-900 font-xs">
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
    </main>
  );
};

export default Home;
