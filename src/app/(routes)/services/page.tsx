"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import Earth from "../../../../public/icons/earth.png";
import HandBag from "../../../../public/icons/handbag.png";
import SmartPhone from "../../../../public/icons/smartphone.png";
import StartUp from "../../../../public/icons/startup.png";
import { useOnScreen } from "@/hooks/useOnScreen";

const Service = () => {
  const ref = useRef();
  const onView = useOnScreen(ref);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (onView) {
      setHeight(20);
    }
  }, [onView]);
  return (
    <div className="services">
      <h1 className="h1 services__title">I Nostri servizi!</h1>
      <div className="container services__wrapper">
        <div className="services__card">
          <div className="services__card-icon">
            <Image src={Earth} alt="SEO" />
          </div>
          <div
            className="services__card-title"
            style={{ height: `${height}px`, transition: "all 2s ease-in-out" }}
          >
            SEO
          </div>
          <div className="services__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div>

        <div className="services__card">
          <div className="services__card-icon">
            <Image src={HandBag} alt="SEO" />
          </div>
          <div className="services__card-title" style={{ height: "0px" }}>
            SVILUPPO WEB
          </div>
          <div className="services__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div>

        <div className="services__card">
          <div className="services__card-icon">
            <Image src={SmartPhone} alt="SEO" />
          </div>
          <div className="services__card-title"> BRAND BUILDING </div>
          <div className="services__card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis placeat doloribus libero architecto a quas. Odio
            debitis dolor, libero nobis qui.{" "}
          </div>
        </div>

        <div className="services__card">
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
        </div>
      </div>
    </div>
  );
};

export default Service;
