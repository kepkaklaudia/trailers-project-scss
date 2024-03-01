import { useEffect } from "react";

export function useScrollToElement(
  elementRef: React.RefObject<HTMLElement>,
  category: string,
  view: string
) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedScrollState = localStorage.getItem("scrollState");

      if (savedScrollState === "manual") {
        if (elementRef.current) {
          const screenWidth = window.innerWidth;
          const offset = screenWidth < 576 ? 0 : 100;

          const scrollToElement = () => {
            if (elementRef.current) {
              window.scrollTo({
                top: elementRef.current.offsetTop + offset,
                behavior: "smooth",
              });
            }
          };

          const delay = 500;
          const timeoutId = setTimeout(scrollToElement, delay);

          return () => {
            clearTimeout(timeoutId);
          };
        }
      }
    }
  }, [category, view]);
}
