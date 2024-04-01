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


//
