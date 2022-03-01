"use strict";
const d = document;
const w = window;
const _menu = d.getElementById("menu-bars");
const _navbar = d.querySelector(".navbar");
const _searchIcon = d.getElementById("#search-icon");
const _searchForm = d.querySelector(".search-form");
const _section = d.querySelectorAll("section");
const _navLinks = d.querySelectorAll("header .navbar a");
const _loader = d.querySelector(".loader-container");

d.addEventListener("click", (e) => {
  if (e.target.matches("#menu-bars")) {
    _menu.classList.toggle("fa-times");
    _navbar.classList.toggle("active");
  }
  if (e.target.matches("#search-icon")) {
    _searchForm.classList.toggle("active");
  }
  if (e.target.matches("#close")) {
    _searchForm.classList.remove("active");
  }
});
w.addEventListener("scroll", (e) => {
  _menu.classList.remove("fa-times");
  _navbar.classList.remove("active");

  _section.forEach((sec) => {
    let top = w.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      _navLinks.forEach((link) => {
        link.classList.remove("active");
        d.querySelector(`header .navbar a[href*=${id}]`).classList.add(
          "active"
        );
      });
    }
  });
});

let swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  ceneredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

let swiper1 = new Swiper(".review-slider", {
  spaceBetween: 20,
  ceneredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader() {
  _loader.classList.add("fade-out");
}
function fadeOut() {
  setInterval(loader, 2000);
}
w.onload = fadeOut;
