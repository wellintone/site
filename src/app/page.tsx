"use client";
import Image from "next/image";
import React from "react";
import ProfilePicture from "../../public/img/developer-pic-1.png";
import AnimatedText from "@/animation/AnimatedText";
import Link from "next/link";
import Button from "@/components/Buttons/button";
import AnimateFadeIn from "@/animation/AnimateFadeIn";
import HireMe from "@/components/HireMe/HireMe";
import { Animation } from "@/context/AnimationContext";
import { BUTTON_SIZES, BUTTON_VARIANTS } from "@/components/Buttons/enums";
import Container from "@/components/molecolar/Container";
import ServicesList from "./servicesList/ServicesList";
import Letsbuild from "./letsbuild/Letsbuild";
import Tab from "@/components/Tab/Tab";

const Home = () => {
  return (
    <main className="home">
      <Animation>
        <Container>
          <AnimateFadeIn shiftMount={0} className="w-full" fadeIn="scaleDown">
            <div className="home__image">
              <Image
                src={ProfilePicture}
                alt="Wellintone"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </AnimateFadeIn>

          <div className="home__description">
            <AnimatedText
              staggerChildren={true}
              onLoadPage={true}
              bouncingY={true}
              as="h1"
              className="h1"
            >
              Digitalmente unici, il tuo successo è il nostro
            </AnimatedText>
            {/* Domina il digitale con la SEO, Scatena il potenziale della tua
              azienda. */}

            <AnimatedText bouncingY={true} delay={10} as="p">
              <div className="home__description-paragraph">
                Scateniamo il potenziale della tua azienda, dominiamo il
                digitale in tutte le sue forme, dalla SEO alla gestione del
                Visual Branding.
              </div>
            </AnimatedText>
            <AnimatedText
              delay={10}
              bouncingY={true}
              className="home__description-buttons"
            >
              <Link href={"/dummy.pdf"} target={"_blank"} download={true}>
                <Button
                  size={BUTTON_SIZES.Large}
                  variant={BUTTON_VARIANTS.Primary}
                >
                  Resume
                </Button>
              </Link>
              <Link href="mailto:abcd@gmail.com">
                <Button
                  size={BUTTON_SIZES.Large}
                  variant={BUTTON_VARIANTS.Underline}
                >
                  Contact
                </Button>
              </Link>
            </AnimatedText>
          </div>
        </Container>

        <HireMe className="hire" />
      </Animation>
      <ServicesList />
      <Tab />
      <Letsbuild></Letsbuild>
    </main>
  );
};

export default Home;
