import { useEffect, useState } from "react";
import useScrollHandling from "@/hooks/useScrollHandling";

const useTranslateXimage = () => {
  const { scrollDirection, scrollPosition } = useScrollHandling();
  const [translateXPosition, setTranslateXPosition] = useState(80);
  const handleTranslateX = () => {
    if (scrollDirection === "down" && scrollPosition > 1800) {
      setTranslateXPosition(
        translateXPosition <= 0 ? 0 : translateXPosition - 1
      );
    } else if (scrollDirection === "up") {
      setTranslateXPosition(
        translateXPosition >= 80 ? 80 : translateXPosition + 1
      );
    }
  };
  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);
  return {
    translateXPosition,
  };
};

export default useTranslateXimage;
