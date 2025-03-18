import { useEffect, useRef, useState } from "react";
const useTranslateXimage = () => {
  const [scrollDrection, setScrollDrection] = useState(null);
  const previousScrollPosition = useRef(0);
  const [translateXPosition, setTranslateXPosition] = useState(80);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollTracking = () => {
    const currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > previousScrollPosition.current) {
      setScrollDrection("down");
    } else if (currentScrollPosition < previousScrollPosition.current) {
      setScrollDrection("up");
    }
    previousScrollPosition.current =
      currentScrollPosition <= 0 ? 0 : currentScrollPosition;

    setScrollPosition(currentScrollPosition);
  };

  const handleTranslateX = () => {
    if (scrollDrection === "down" && scrollPosition > 1800) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDrection === "up") {
      setTranslateXPosition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollTracking);
    return () => window.removeEventListener("scroll", scrollTracking);
  }, []);

  return {
    translateXPosition,
    handleTranslateX,
    scrollPosition,
  };
};
export default useTranslateXimage;
