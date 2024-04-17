import { useEffect, useState, useRef, useMemo } from "react";

export function useOnScreen(ref: any, root?: any, rootMargin?: any) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef(null);

  const options = useMemo(() => {
    return {
      root: null,
      threshold: root ? 1 : 0,
      rootMargin: root && rootMargin ? `${rootMargin}%` : "0px",
    };
  }, [root, rootMargin]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setIsOnScreen(entry.isIntersecting);
    }, options);
  }, [options]);

  useEffect(() => {
    observerRef.current.observe(ref.current);

    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);

  return isOnScreen;
}
