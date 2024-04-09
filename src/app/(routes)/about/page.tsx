import AnimatedText from "@/animation/AnimatedText";
import AnimationCursor from "@/animation/AnimatedCursor/AnimationCursor";
import FluidContainer from "@/components/molecolar/FluidContainer";
import React from "react";
import AnimatedCursorChild from "@/animation/AnimatedCursor/AnimatedCursorChild";
import Image from "next/image";
import first from "../../../../public/img/bachelor.jpg";
import second from "../../../../public/img/hair1.jpg";
import third from "../../../../public/img/developer-pic-2.jpg";
import fourth from "../../../../public/img/developer-pic-1.png";
import fifth from "../../../../public/img/right.jpg";
import AnimateFadeIn from "@/animation/AnimateFadeIn";
import { ImageSlider } from "@/components/ImageSlider/ImageSlider";
import { url } from "inspector";
import ImageSliderContent from "@/components/ImageSlider/ImageSliderContent";

const IMAGES = [
  { url: first, alt: "Car One" },
  { url: second, alt: "Car Two" },
  { url: third, alt: "Car Three" },
  { url: fourth, alt: "Car Four" },
  { url: fifth, alt: "Car Five" },
];

const About = () => {
  return (
    <main className="w-full h-min-screen column align-center justify-center">
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

      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          aspectRatio: "10 / 6",
          margin: "0 auto",
        }}
      >
        <ImageSlider>
          {IMAGES.map(({ url, alt }, index: number) => (
            <ImageSliderContent id={index}>
              <AnimateFadeIn delay={0.3} className="h[100%] w[100%] ps-a">
                <div className="font-m ps-a left[50%] top[50%] t[-50%] color-primary p-2 ">
                  SONO AL PRIMO
                </div>
              </AnimateFadeIn>
              <AnimateFadeIn delay={0.4} className="h[100%] w[100%] ps-a">
                <div className="font-m ps-a left[60%] top[70%] t[-50%] color-primary p-2 ">
                  SONO primo ma secondo
                </div>
              </AnimateFadeIn>
              <Image
                key={url + alt}
                src={url}
                alt={alt}
                /* aria-hidden={imageIndex !== index} */
                className="img-slider-img"
              />
            </ImageSliderContent>
          ))}
        </ImageSlider>
      </div>
      {/* <ImageSlider
        buttonStyle={{
          height: "90px",
          width: "90px",
          borderRadius: "100%",
          fontSize: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        buttonLeftIcon="&#x2190;"
        buttonRightIcon="&#x2192;"
      >
        <div className="w-min[100%] 1">
          <AnimateFadeIn as="h1" className="ps-a color-primary">
            SONO AL PRIMO
          </AnimateFadeIn>
          <Image
            className="w-min[100%] 1 "
            height={500}
            src={first}
            alt="first"
          ></Image>
        </div>
        <div className="w-min[100%] 2">
          <Image
            height={500}
            className="w-min[100%] 2"
            src={second}
            alt="second"
          ></Image>
        </div>
        <div className="w-min[100%] 3">
          <Image
            height={500}
            className="w-min[100%] 3"
            src={third}
            alt="third"
          ></Image>
        </div>
        <div className="w-min[100%] 4">
          <AnimateFadeIn as="h1" className="ps-a color-primary">
            SONO AL QURTO
          </AnimateFadeIn>
          <Image
            height={500}
            className="w-min[100%]4"
            src={fourth}
            alt="fourth"
          ></Image>
        </div>
        <div className="w-min[100%] 5">
          <Image
            height={500}
            className="w-min[100%] 5"
            src={fifth}
            alt="fifth"
          ></Image>
        </div>
      </ImageSlider> */}
    </main>
  );
};

export default About;
