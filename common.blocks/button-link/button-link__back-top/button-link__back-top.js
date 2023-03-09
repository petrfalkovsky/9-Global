export function backToTop() {
    "use strict";
    const target = document.getElementById("back-to-top-target-id");
    const link = document.getElementById("back-to-top");
    link.style.display = "none";
    window.addEventListener("scroll", function () {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      if (window.pageYOffset >= targetPosition) {
        link.style.display = "block";
      } else {
        link.style.display = "none";
      }
    });
  }