import Button from "@/components/Buttons/button";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/components/Buttons/enums";
import Image from "next/image";
import React from "react";
import Universe from "../../../public/img/universe.jpeg";
import Parallax from "@/animation/Parallax";

const Letsbuild = () => {
  return (
    <div className="letsBuild">
      <Parallax
        id="aboutUsDescription"
        scrollVelocity={0.4}
        zIndex={2}
        init={50}
      >
        <div className="letsBuild__hover"></div>
        <Image
          className="letsBuild__bg"
          src={Universe}
          alt="iniziamo a costruire insieme"
        />
      </Parallax>
      <h1 className="letsBuild__title">
        Iniziamo a costruire la tua posizione digitale.
      </h1>
      <p className="letsBuild__description">
        Book an intro meeting or drop us an email and we’ll get back to you
        within 24 hours.
      </p>
      <div className="letsBuild__callToAction">
        <Button
          size={BUTTON_SIZES.Large}
          variant={BUTTON_VARIANTS.SecondaryOutline}
          className="letsBuild__book"
        >
          Book an intro meet
        </Button>
        <Button
          size={BUTTON_SIZES.Large}
          variant={BUTTON_VARIANTS.SecondaryOutline}
          className="letsBuild__book"
        >
          Send us an email
        </Button>
      </div>
    </div>
  );
};

export default Letsbuild;
