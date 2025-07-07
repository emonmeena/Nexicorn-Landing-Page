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

function toggleBlurEffect() {
    document.getElementById('page-content').classList.toggle('blur-effect');
    document.body.classList.toggle('prevent-scroll');
    modal.toggle('blur-effect')
  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    toggleBlurEffect();
}

var btns = document.querySelectorAll('.contact-btn');
btns.forEach(function(btn) {
    btn.onclick = function() {
      modal.style.display = 'block';
      toggleBlurEffect();
    }
  });

  window.onclick = function(event) {
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
mobMenuBtns.forEach(function(btn) {
    btn.onclick = toggleMenu;
  });
//

document.getElementById('demo-call-form').onsubmit = async function(e) {
  e.preventDefault();
  const code = document.getElementById('country-code').value;
  const phone = document.getElementById('demo-phone').value;
  const fullNumber = code + phone;

  // Send POST request
  try {
    const response = await fetch('https://app.nexicornai.com/health/api/make-call-lg-page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fullNumber })
    });

    if (response.ok) {
      document.getElementById('demo-call-message').textContent = `Call landing at ${fullNumber} shortly!`;
      document.getElementById('demo-call-message').classList.remove('hidden');
    } else {
      document.getElementById('demo-call-message').textContent = 'Failed to request call. Please try again.';
      document.getElementById('demo-call-message').classList.remove('hidden');
    }
  } catch (error) {
    document.getElementById('demo-call-message').textContent = 'Network error. Please try again.';
    document.getElementById('demo-call-message').classList.remove('hidden');
  }
};


const answers   = document.querySelectorAll('.faq-answer');
    const arrows    = document.querySelectorAll('.faq-arrow');

    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const answer = document.getElementById(btn.dataset.faq);
        const arrow  = btn.querySelector('.faq-arrow');
        const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

        /* Close everything first */
        answers.forEach(a => {
          a.style.maxHeight = '0';
          a.classList.remove('opacity-100');
        });
        arrows.forEach(a => a.classList.remove('rotate-180'));

        /* Open the clicked one if it was closed */
        if (!isOpen) {
          answer.style.maxHeight = answer.scrollHeight + 'px';   // natural height
          answer.classList.add('opacity-100');
          arrow.classList.add('rotate-180');
        }
      });
    });
