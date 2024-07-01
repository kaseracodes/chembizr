import { useEffect } from "react";

const useDisableZoom = (
  scrollCheck = true,
  keyboardCheck = true,
  touchCheck = true
) => {
  useEffect(() => {
    const handleKeydown = (e) => {
      if (
        keyboardCheck &&
        e.ctrlKey &&
        (e.keyCode === 61 ||
          e.keyCode === 107 ||
          e.keyCode === 173 ||
          e.keyCode === 109 ||
          e.keyCode === 187 ||
          e.keyCode === 189)
      ) {
        e.preventDefault();
      }
    };

    const handleWheel = (e) => {
      if (scrollCheck && e.ctrlKey) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e) => {
      if (touchCheck && e.touches.length > 1) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollCheck, keyboardCheck, touchCheck]);
};

export default useDisableZoom;
