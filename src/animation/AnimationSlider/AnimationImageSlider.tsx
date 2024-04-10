import { useAnimation } from "@/context/AnimationContext";
import { throttle } from "@/utils/functions";
import React, { forwardRef, useCallback, useEffect } from "react";

const AnimationContainer = forwardRef(({ children }: any) => {
  const { animationRef, direction, count, setNumber, setDirection } =
    useAnimation();

  const triggerAnimationF = useCallback(() => {
    const element = animationRef.current;

    /* SLIDER */
    const im = element.children[count - 1]?.getElementsByTagName("img")[0];
    const nextIm = element.children[count + 1]?.getElementsByTagName("img")[0];

    for (let i = 0; i < element.children.length; i++) {
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
    }
  }, [animationRef.current, count, direction]);

  const showNextImage = useCallback(
    throttle(() => {
      setNumber((index) => {
        setDirection("right");
        if (index === children.length - 1) return 0;
        return index + 1;
      });
    }, 1000),
    []
  );

  const showPrevImage = useCallback(
    throttle(() => {
      setNumber((index) => {
        setDirection("left");
        if (index === 0) return children.length - 1;
        return index - 1;
      });
    }, 1000),
    []
  );

  useEffect(() => {
    if (count || direction) {
      triggerAnimationF();
    }
  }, [count, direction]);
  return (
    <section
      aria-label="Image Slider"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <div
          ref={animationRef}
          id={count.toString()}
          className={`ps-r w[100%] h[500px] display-f`}
        >
          {children}
        </div>
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0, zIndex: 999 }}
        aria-label="View Previous Image"
      >
        {"<"}
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0, zIndex: 999 }}
        aria-label="View Next Image"
      >
        {">"}
      </button>
      <div id="after-image-slider-controls" />
    </section>
  );
});

export default AnimationContainer;
