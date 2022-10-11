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
 