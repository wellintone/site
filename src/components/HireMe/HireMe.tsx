import Spin from "@/animation/Spin";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RotateImage from "../../../public/img/personal.png";

const HireMe = () => {
  return (
    <div className="hire_container align-center justify-center">
      <Spin>
        <Image src={RotateImage} height={300} width={300} alt="rotate" />
      </Spin>
      <Link
        href="/"
        className="ps-a-center justify-center align-center bg-primary h[80px] w[80px] b-radius-full font-w-600"
        type="btn-primary"
      >
        Hire Me
      </Link>
    </div>
  );
};

export default HireMe;
