let btn = document.querySelector(".navbar-toggler");

btn.onclick = function () {
  this.classList.toggle("active");
};

let image = document.querySelector(".image img");
let arr = [
  "desktop-image-hero-1",
  "desktop-image-hero-2",
  "desktop-image-hero-3",
];
let title = document.querySelectorAll(".title-main");

let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");

let current = 0;

rightBtn.onclick = rightImage;
leftBtn.onclick = leftImage;

function rightImage() {
  if (rightBtn.classList.contains("disaplyed")) {
    console.log("stop right");
  } else {
    current++;
    checker();
  }
}

function leftImage() {
  if (leftBtn.classList.contains("disaplyed")) {
    console.log("stop left");
  } else {
    current--;
    checker();
  }
}

function checker() {
  if (current === arr.length - 1) {
    rightBtn.classList.add("disaplyed");
  } else {
    rightBtn.classList.remove("disaplyed");
  }
  if (current === 0) {
    leftBtn.classList.add("disaplyed");
  } else {
    leftBtn.classList.remove("disaplyed");
  }
  image.src = `./images/${arr[current]}.jpg`;
  title.forEach((title) => {
    title.classList.remove("active");
    title.classList.remove("move");
  });
  title[current].classList.add("active");
  title[current].classList.add("move");
}

checker();

if (window.innerWidth > 576) {
  window.onload = function () {
    document.querySelector(".title-main").classList.add("move");
    document.querySelector(".about-title").classList.add("move");
    document.querySelector(".dark").classList.add("active");
    document.querySelector(".light").classList.add("active");
  };
}

let about = document.querySelector(".about");

if (window.innerWidth <= 576) {
  document.querySelector(".title-main").classList.add("move");
  window.onscroll = function () {
    document.querySelector(".about-title").classList.add("move");
    document.querySelector(".dark").classList.add("active");
    document.querySelector(".light").classList.add("active");
  };
}
