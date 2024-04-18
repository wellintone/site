import Spin from "@/animation/Spin";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RotateImage from "../../../public/img/personal.png";
import AnimatedCursorChild from "@/animation/AnimatedCursor/AnimatedCursorChild";

const HireMe = ({ className }: any) => {
  return (
    <div className={className}>
      <div className="wrapper">
        <AnimatedCursorChild as="div" shift={-40}>
          <Spin speed={8}>
            <Image
              className="image-hire"
              src={RotateImage}
              height={300}
              width={300}
              alt="rotate"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </Spin>
          <Link href="/" className="button-hire">
            <div>Hire Me</div>
          </Link>
        </AnimatedCursorChild>
      </div>
    </div>
  );
};

export default HireMe;
