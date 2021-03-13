$(document).ready(function () {
    // initializePage();
  $('garbage').on('click', function() {
    $('garbage').removeClass('active');
    $(this).addClass('active');
  });
})

function initializePage() {
    var garbage = document.getElementById("garbage");
    garbage.addEventListener("click", function() {
        this.children[0].style.color = "#66c144";
        // console.log("test COLOR");
        // garbage.style.color = "#66c144";
        // this.querySelector('.fas').style.fontSize = '3rem';
        // this.getElementsByTagName('I')[0].classList.toggle('fa-spin');
        // this.firstElementChild.style.transition = 'color 1.5s ease 1.25s, font-size 0.75s ease-out';
      }, false);
}
