"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useOnScreen } from "@/hooks/useOnScreen";
import AnimatedText from "@/animation/AnimatedText";
import AnimateFadeIn from "@/animation/AnimateFadeIn";

const Service = () => {
  const ref = useRef();
  const onView = useOnScreen(ref, null, 70);
  const [animateTitle, setAnimateTitle] = useState(false);

  useEffect(() => {
    if (onView) {
      setAnimateTitle(true);
    }
  }, [onView]);
  return (
    <div className="services">
      {/*  <h1 className="h1 services__title">I Nostri servizi!</h1> */}

      <AnimatedText
        staggerChildren={true}
        bouncingY={true}
        as="h1"
        className="h1 services__title"
      >
        I Nostri servizi!
      </AnimatedText>
      <div className="services__wrapper">
        <div
          className={`${animateTitle ? "services__card" : "services__default"}`}
        >
          <div
            ref={ref}
            className={`${animateTitle ? "animate" : "services__card-title"}`}
          >
            <AnimatedText
              staggerChildren={true}
              bouncingY={true}
              as="h1"
              className="h1 animate"
            >
              SEO
            </AnimatedText>
          </div>
          <div
            /*  style={{ color: "#e9e6e0" }} */
            className={`${
              animateTitle
                ? "animate__description"
                : "services__card-description"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div>

        <div
          className={`${animateTitle ? "services__card" : "services__default"}`}
        >
          <div
            /*  style={{ color: "#e9e6e0" }} */
            className={`${
              animateTitle
                ? "animate__description"
                : "services__card-description"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
          <div
            ref={ref}
            className={`${animateTitle ? "animate" : "services__card-title"}`}
          >
            <AnimatedText
              staggerChildren={true}
              bouncingY={true}
              as="h1"
              className="h1 animate"
            >
              WEB
            </AnimatedText>
          </div>
        </div>

        <div
          className={`${animateTitle ? "services__card" : "services__default"}`}
        >
          <div
            ref={ref}
            className={`${animateTitle ? "animate" : "services__card-title"}`}
          >
            <AnimatedText
              staggerChildren={true}
              bouncingY={true}
              as="h1"
              className="h1 animate"
            >
              SOCIALS
            </AnimatedText>
          </div>
          <div
            /*  style={{ color: "#e9e6e0" }} */
            className={`${
              animateTitle
                ? "animate__description"
                : "services__card-description"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div>

        {/* <div className={`${animateTitle ? "services__card" : "services__default"}`}>
          <div
            ref={ref}
            className={`${
              animateTitle ? "animate__icon" : "services__card-icon"
            }`}
          >
            <Image src={HandBag} alt="SEO" />
          </div>
          <div
            ref={ref}
            className={`${animateTitle ? "animate" : "services__card-title"}`}
          >
            {" "}
            SVILUPPO WEB{" "}
          </div>
          <div className="services__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div>

        <div className="services__card">
          <div
            ref={ref}
            className={`${
              animateTitle ? "animate__icon" : "services__card-icon"
            }`}
          >
            <Image src={SmartPhone} alt="SEO" />
          </div>
          <div
            ref={ref}
            className={`${animateTitle ? "animate" : "services__card-title"}`}
          >
            {" "}
            BRAND BUILDING{" "}
          </div>
          <div className="services__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div> */}

        {/* <div className="services__card">
          <div className="services__card-icon">
            <Image src={StartUp} alt="SEO" />
          </div>
          <div className="services__card-title"> SOCIAL MEDIA </div>
          <div className="services__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div>

        <div className="services__card">
          <div className="services__card-icon">
            <Image src={StartUp} alt="DESIGN" />
          </div>
          <div className="services__card-title"> DESIGN </div>
          <div className="services__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div>

        <div className="services__card">
          <div className="services__card-icon">
            <Image src={StartUp} alt="DESIGN" />
          </div>
          <div className="services__card-title"> ADS </div>
          <div className="services__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Service;
