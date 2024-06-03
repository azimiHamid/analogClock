// **************************** navbar toggle button **************************************** 
const menuLinks = document.getElementById("menu-links");
const navbar = document.getElementById("navbar");
const menuIcon = document.querySelector(".menu-icon");
let isOpen = false;

menuIcon.addEventListener("click", (e) => {
  if (isOpen) {
    menuIcon.src = "images/menu.png";
  } else {
    menuIcon.src = "images/close.png";
  }
  isOpen = !isOpen;

  toggleMenu();
});

function toggleMenu() {
  menuLinks.classList.toggle("show-menu");
}

window.onscroll = function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 0) {
    navbar.style.background = "#D0CECF";
  } else {
    navbar.style.background = "transparent";
  }
};

function show_clock() {
  let hr = document.querySelector(".hour");
  let min = document.querySelector(".min");
  let sec = document.querySelector(".sec");

  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hr.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
  min.style.transform = `rotate(${6 * minutes}deg)`;
  sec.style.transform = `rotate(${6 * seconds}deg)`;
}

setInterval(show_clock, 1000);




// **************************** preloader **************************************** 
const preloader = document.querySelector(".preloader");
const mainContent = document.getElementById("mainContent");
const audio = document.getElementById("myAudio");
const audio2 = document.getElementById("myAudio2");
const playButton = document.getElementById("playButton");
const countdownElement = document.getElementById("countdown");

function countdown(seconds) {
  let count = seconds;
  let interval = setInterval(function () {
    count--;
    countdownElement.textContent = count;
    if (count === 0) {
      clearInterval(interval);
      countdownElement.textContent = "";
      playButton.style.display = "inline-block";
    }
  }, 1000);
}

playButton.addEventListener("click", function () {
  audio2.volume = 0.3;
  audio2.play();
  setTimeout(() => {
    audio.volume = 0.3;
    audio.play();
  }, 5000);

  preloader.style.display = "none";
  mainContent.style.display = "block";
});

window.onload = function () {
  countdown(3);
};

const copyRightYear = document.getElementById("copyRightYear");
copyRightYear.innerHTML = new Date().getFullYear();