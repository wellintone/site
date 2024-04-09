import { useEffect, useState, useRef } from "react";

export function useOnScreen(ref: any, root?: any, rootMargin?: any) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  const options = {
    root: null,
    threshold: root ? 1 : 0,
    rootMargin: root && rootMargin ? `${rootMargin}%` : "0px",
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, options);
  }, []);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
