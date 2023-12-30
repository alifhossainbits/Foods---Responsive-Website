"use strict";

// navbar start

document.querySelector(".menu-nav").addEventListener("click", () => {
  console.log(54);
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

// navbar end

// section-1 icons loop start

const icons = document.querySelectorAll(".section-1-icons i");
let i = 1;
setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);

// setInterval(() => {
//     const icon = document.querySelector(".section-1-icons .change");
//     icon.classList.remove("change");
//     icon.nextElementSibling.classList.add("change");
//   }, 1000);

// section-1 icons loop end

// navbar
