// Adding background to header if scrolling
let header = document.querySelector('header');
window.onscroll = function() {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 70) {
        header.style.backgroundColor = "#d9d9d9";
        header.style.backgroundImage = "linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%)";
    }
    else {
        header.style.backgroundColor = "transparent";
        header.style.backgroundImage = "none";
    }
}