 // BACK TO TOP
 function backtotop() {
    window.scroll(0, 0);
}
window.addEventListener("scroll", function() {
    let backtotop = document.getElementById("backtotop");
    if (window.scrollY > 250) {
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
});

// FOOTER
const currentYear = new Date().getFullYear(); document.getElementById('currentYear').textContent = currentYear;