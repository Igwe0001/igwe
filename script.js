const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const line = document.querySelectorAll(".line");
const link = document.querySelectorAll(".link");
const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logospan = document.querySelectorAll('.intro-logo');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {

    logospan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("acting");
      }, (idx + 1) * 400)  
    })

    setTimeout(() => {
      logospan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('acting');
          span.classList.add('fade')
        }, (idx + 1) * 50)
      })
    }, 2000)
    
    
    setTimeout(() => {
    intro.style.top ='-100vh'
  }, 2300)




  })
})







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


for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



window.addEventListener('scroll', reveal);

function reveal(){
  let reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 80;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('show');
    }
    else {
      reveals[i].classList.remove('show');
    }
  }
}

let loader = document.getElementById('preloader');
window.addEventListener('load', function () {
  loader.style.display = 'none';
})