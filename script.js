const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const line = document.querySelectorAll(".line");
const link = document.querySelectorAll(".link");

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-toggle");
  line.forEach((e) => {
    e.classList.toggle("trans");
  });
});

link.forEach((e) => {
  e.addEventListener("click", () => {
    nav.classList.remove("nav-toggle");
    line.forEach((e) => {
      e.classList.toggle("trans");
    });
  });
});
