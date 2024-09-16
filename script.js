const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const line = document.querySelectorAll(".line");
const link = document.querySelectorAll(".link");
const intro = document.querySelector(".intro");
const logo = document.querySelector(".logo-header");
const logospan = document.querySelector(".intro-logo");

// Page intro
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    setTimeout(() => {
      logospan.classList.add("acting");
    });

    setTimeout(() => {
      logospan.classList.remove("acting");
      logospan.classList.add("fade");
    }, 4000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 4500);
  });
});

// Sticky header
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Navigation
hamburger.addEventListener("click", () => {
  nav.classList.toggle("nav-toggle");
  line.forEach((e) => {
    e.classList.toggle("trans");
  });
});

// Nav link
link.forEach((e) => {
  e.addEventListener("click", () => {
    nav.classList.remove("nav-toggle");
    line.forEach((e) => {
      e.classList.toggle("trans");
    });
  });
});

// Nav link active class
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Section scroll
// window.addEventListener("scroll", reveal);

// function reveal() {
//   let reveals = document.querySelectorAll(".reveal");
//   const sections = document.querySelectorAll(
//     ".section-2, .section-3, .section-4"
//   );

//   for (let i = 0; i < reveals.length; i++) {
//     let windowHeight = window.innerHeight;
//     let revealTop = reveals[i].getBoundingClientRect().top;
//     let revealPoint = 50;

//     if (revealTop < windowHeight - revealPoint) {
//       reveals[i].classList.add("show");
//       sections[i].classList.add("show");
//     }
//   }
// }


// Select all elements with the class "reveal" and the sections you want to observe
const reveals = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll(".section-2, .section-3, .section-4");

// Create a callback function for the Intersection Observer
const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    // Check if the element is intersecting (visible in the viewport)
    if (entry.isIntersecting) {
      // Add the "show" class to the element
      entry.target.classList.add("show");

      // Find the corresponding section and add the "show" class
      const sectionIndex = [...reveals].indexOf(entry.target);
      if (sections[sectionIndex]) {
        sections[sectionIndex].classList.add("show");
      }

      // Unobserve the element after it is shown to avoid unnecessary checks
      observer.unobserve(entry.target);
    }
  });
};

// Create an Intersection Observer instance with the callback and options
const observerOptions = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin around the root
  threshold: 0.01 // Trigger when 10% of the element is visible
};
const observer = new IntersectionObserver(revealCallback, observerOptions);

// Observe each reveal element
reveals.forEach(reveal => observer.observe(reveal));


let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});


const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", () => {
    item.classList.toggle("open");
    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    } else {
      description.style.height = "0px";
      item.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
    removeOpen(index); //calling the funtion and also passing the index number of the clicked header
  });
});
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");
      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
    }
  });
}