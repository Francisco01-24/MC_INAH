
window.onscroll = function() {stickNavbar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed-menu");
    } else {
        navbar.classList.remove("fixed-menu");
    }
}
