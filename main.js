import "./assets/css/tailwind.css";


let switchers = document.querySelectorAll(".switcher");
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

switchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  });
});

// Get the modal
var modal = document.getElementById('myModal');



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
function toggleBlurEffect() {
  document.getElementById('page-content').classList.toggle('blur-effect');
  document.body.classList.toggle('prevent-scroll');
  modal.toggle('blur-effect')
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  toggleBlurEffect();
}

var btns = document.querySelectorAll('.contact-btn');
btns.forEach(function (btn) {
  btn.onclick = function () {
    modal.style.display = 'block';
    toggleBlurEffect();
  }
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    toggleBlurEffect();
  }
}

function toggleMenu() {
  var navContainer = document.getElementById("nav-container");
  var line1 = document.getElementById("line1");
  var line2 = document.getElementById("line2");
  document.body.classList.toggle('prevent-scroll');


  // line1.classList.toggle("transform-line1");
  // line2.classList.toggle("transform-line2");
  var header = document.getElementById("header")
  header.classList.toggle("hidden");
  navContainer.classList.toggle("hidden");
}
var menuHamburger = document.getElementById("menu")
var menuHamburgerclose = document.getElementById("close-mb-menu")

menuHamburger.onclick = toggleMenu;
menuHamburgerclose.onclick = toggleMenu;


var mobMenuBtns = document.querySelectorAll('.mobile-menu-btn');
mobMenuBtns.forEach(function (btn) {
  btn.onclick = toggleMenu;
});
//
