"use client";

import { useAnimation } from "@/context/AnimationContext";
import React, { forwardRef, useCallback, useEffect } from "react";

const AnimationContainer = forwardRef(({ children }: any) => {
  const { animationRef, direction, count } = useAnimation();

  const triggerAnimationF = useCallback(() => {
    const element = animationRef.current;

    const currentAnimatedFadeIn =
      element.children[count].getElementsByClassName("animatedFadeIn");
    const prevAnimatedFadeIn =
      element.children[count - 1]?.getElementsByClassName("animatedFadeIn");
    const nextAnimatedFadeIn =
      element.children[count + 1]?.getElementsByClassName("animatedFadeIn");

    for (let i = 0; i < element.children.length; i++) {
      /* CURRENT PER PARALLAX */
      element.children[i].style.translate = `${-100 * count}%`;
    }

    for (let index = 0; index < currentAnimatedFadeIn.length; index++) {
      currentAnimatedFadeIn[index].classList.add("on-fade-in-" + direction);
      currentAnimatedFadeIn[index].classList.remove("fade-in-" + direction);
    }
    if (prevAnimatedFadeIn) {
      for (let index = 0; index < prevAnimatedFadeIn.length; index++) {
        prevAnimatedFadeIn[index]?.classList.remove("on-fade-in-right");
        prevAnimatedFadeIn[index]?.classList.add("fade-in-left");
        prevAnimatedFadeIn[index]?.classList.remove(
          direction === "right" ? "on-fade-in-left" : "n"
        );
      }
    }
    if (nextAnimatedFadeIn) {
      for (let index = 0; index < nextAnimatedFadeIn.length; index++) {
        nextAnimatedFadeIn[index]?.classList.remove("on-fade-in-left");
        nextAnimatedFadeIn[index]?.classList.add("fade-in-right");
        nextAnimatedFadeIn[index]?.classList.remove(
          direction === "right" ? "on-fade-in-right" : "n"
        );
      }
    }

    /* SLIDER */
    const currentAnimatedSliderIn =
      element.children[count].getElementsByClassName("animatedSliderIn");
    const prevAnimatedSliderIn =
      element.children[count - 1]?.getElementsByClassName("animatedSliderIn");
    const nextAnimatedSliderIn =
      element.children[count + 1]?.getElementsByClassName("animatedSliderIn");

    const im = element.children[count - 1]?.getElementsByTagName("img")[0];
    const nextIm = element.children[count + 1]?.getElementsByTagName("img")[0];

    for (let i = 0; i < element.children.length; i++) {
      /* QUESTO SERVE PER FARE PARALLAX */
      if (im?.style) {
        im.style.translate = `${70}%`;
        setTimeout(() => {
          im.style.translate = `${0}%`;
        }, 1000);

        im.style.transition = `all 1s ease-in-out`;
      }

      /* QUESTO SERVE PER FARE PARALLAX */
      if (nextIm?.style) {
        nextIm.style.translate = `${-70}%`;
        setTimeout(() => {
          nextIm.style.translate = `${0}%`;
        }, 1000);

        nextIm.style.transition = `all 1s ease-in-out`;
      }
      element.children[i].style.translate = `${-100 * count}%`;
      element.children[i].style.transition = `all 2 ease-in-out`;
    }

    for (let index = 0; index < currentAnimatedSliderIn.length; index++) {
      currentAnimatedSliderIn[index].classList.add("on-slider-in-" + direction);
      currentAnimatedSliderIn[index].classList.remove("slider-in-" + direction);
    }
    if (prevAnimatedSliderIn) {
      for (let index = 0; index < prevAnimatedSliderIn.length; index++) {
        prevAnimatedSliderIn[index]?.classList.remove("on-slider-in-right");
        prevAnimatedSliderIn[index]?.classList.add("slider-in-left");
        prevAnimatedSliderIn[index]?.classList.remove(
          direction === "right" ? "on-slider-in-left" : "n"
        );
      }
    }
    if (nextAnimatedSliderIn) {
      for (let index = 0; index < nextAnimatedSliderIn.length; index++) {
        nextAnimatedSliderIn[index]?.classList.remove("on-slider-in-left");
        nextAnimatedSliderIn[index]?.classList.add("slider-in-right");
        nextAnimatedSliderIn[index]?.classList.remove(
          direction === "right" ? "on-slider-in-right" : "n"
        );
      }
    }
  }, [animationRef.current, count, direction]);

  useEffect(() => {
    if (count || direction) {
      triggerAnimationF();
    }
  }, [count, direction]);
  return (
    <div
      ref={animationRef}
      id={count.toString()}
      className={`ps-r w[100%] h[500px] display-f`}
    >
      {children}
    </div>
  );
});

export default AnimationContainer;
