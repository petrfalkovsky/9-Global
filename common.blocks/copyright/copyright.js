export function copyright() {
  "use strict";

  const year = new Date().getUTCFullYear();
  document.getElementById("year").innerHTML = year;
}