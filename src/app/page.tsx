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
      <FluidContainer minWidth="22rem" className="pt-0">
        <div className="w-full">
          <Image
            src={ProfilePicture}
            alt="Wellintone"
            className="w-full h-auto"
          />
        </div>
        <div className="column">
          <AnimatedText
            className="font-lg line-h-6 font-w-700 pb-2"
            onLoadPage={true}
          >
            Turning Vision Into Reality With Code And Design.
          </AnimatedText>
          <AnimatedText delay={10} bouncingY={true}>
            <p className="justify-start text-start">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              labore explicabo libero commodi sequi delectus saepe, et suscipit
              veritatis aliquid itaque, voluptatum dolores, dolorum ut
              aspernatur. Nostrum dolorum vero tempora!
            </p>
          </AnimatedText>
          <AnimatedText
            className="font-xs align-center pt-2"
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
