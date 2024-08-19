const ham_menu = document.querySelector(".hamburger");
const mob_menu = document.querySelector(".mobile-menu");

ham_menu.addEventListener("click", function () {
  ham_menu.classList.toggle("is-active");
  mob_menu.classList.toggle("is-active");
});


function scrollAbout() {
  const element = document.getElementById("about");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollWork() {
  const element = document.getElementById("work");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollProjects() {
  const element = document.getElementById("projects");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}
function scrollContact() {
  const element = document.getElementById("contact");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

let slideIndex = 0;
showSlide();

function showSlide() {
  let i;
  let slide = document.getElementsByClassName("slide");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slide.length) {slideIndex = 1}
  slide[slideIndex-1].style.display = "block";
  setTimeout(showSlide, 3000);

  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
}

const switchTheme = () => {
  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute("data-theme"),
      newTheme

  newTheme = (dataTheme === "light") ? "dark" : "light"

  rootElem.setAttribute("data-theme", newTheme)

  localStorage.setItem("theme", newTheme)
}
document.querySelector('#theme-switcher').addEventListener('click', switchTheme)