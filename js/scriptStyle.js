function darkModeFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function backToTop(){
    var btn = document.querySelector("#backToTop");
    btn.addEventListener("click", function() {
        window.scrollTo(0, 0);
    });
 }

 function showMenu() {
    var x = document.getElementById("navbar-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 
 