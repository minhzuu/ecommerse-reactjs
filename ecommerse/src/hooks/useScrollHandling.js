import { useEffect, useRef, useState, useCallback } from "react";

const useScrollHandling = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const previousScrollPosition = useRef(window.pageYOffset);
  const [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  const scrollTracking = useCallback(() => {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDirection("down");
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDirection("up");
    }

    previousScrollPosition.current = Math.max(currentScrollPosition, 0);
    setScrollPosition(currentScrollPosition);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, [scrollTracking]);

  return {
    scrollDirection,
    scrollPosition,
  };
};

export default useScrollHandling;
