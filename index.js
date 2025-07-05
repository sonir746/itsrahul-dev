window.addEventListener("load", () => {
  const notice = document.getElementById("devNotice");
  notice.style.display = "block";

  setTimeout(() => {
    notice.style.display = "none";
  }, 4000); // visible for 4 seconds
});

let isScrolling;

window.addEventListener("scroll", () => {
  const div1 = document.querySelector(".div1");
  const div2 = document.querySelector(".div2");
  const contact = document.querySelector(".contact");
  if (!div1 || !div2 || !contact) return;

  const rect = div2.getBoundingClientRect();
  const rect2 = contact.getBoundingClientRect();
  const isScrolldown = rect.top < 0;
  let isScrollEnd = rect2.bottom < 1300;
  if (window.innerWidth <= 700) {
    isScrollEnd = rect2.bottom < 950;
  }
  if (window.innerWidth <= 400) {
    isScrollEnd = rect2.bottom < 620;
  }

  // console.log(rect2.bottom);
  // console.log(isScrollEnd);
  // Show div1 when scrolling starts
  div1.classList.remove("none");

  // Clear any previously scheduled "hide"
  clearTimeout(isScrolling);

  if (window.innerWidth <= 1024) {
    if (isScrolldown) {
      div1.classList.add("fixed-bottom");

      if (!isScrollEnd) {
        // Set a timeout to hide after 5 sec of inactivity
        isScrolling = setTimeout(() => {
          div1.classList.add("none");
          // console.log("Stopped scrolling");
        }, 4000);
      }
    } else {
      div1.classList.remove("fixed-bottom");
    }
  }
});
