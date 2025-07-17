import { useEffect } from "react";

const ScrollEffect = () => {
  useEffect(() => {
    let isScrolling;
    const handleScroll = () => {
      const header = document.querySelector(".header");
      const main = document.querySelector(".main");
      if (!header || !main) return;
      const rect = main.getBoundingClientRect();
      const rect2 = main.getBoundingClientRect();
      //   console.log(rect.top);
      console.log(rect.bottom);
      const isScrolldown = rect.top < 0;

      let isScrollEnd;

      if (window.innerWidth <= 400) {
        isScrollEnd = rect2.bottom <= 700;
      } else if (window.innerWidth <= 768) {
        isScrollEnd = rect2.bottom < 950;
      } else {
        isScrollEnd = rect2.bottom < 1200;
      }
      console.log("Scroling");

      header.classList.remove("none");

      // Clear any previously scheduled "hide"
      clearTimeout(isScrolling);
      if (window.innerWidth <= 1024) {
        if (isScrolldown) {
          header.classList.add("fixed-bottom");
          if (!isScrollEnd) {
            isScrolling = setTimeout(() => {
              header.classList.add("none");
              console.log("Stopped scrolling");
            }, 4000);
          }
        } else {
          header.classList.remove("fixed-bottom");
        }
      }
    };

    // ✅ Add listener
    window.addEventListener("scroll", handleScroll);

    // ❌ Cleanup listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // ← only run on first load

  return null; // No visible output needed
};

export default ScrollEffect;
