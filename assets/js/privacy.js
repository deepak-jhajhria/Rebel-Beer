function openNav() {
    document.getElementById("navbar").classList.toggle("left-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross");
  }
  
  const currentYear = new Date().getFullYear(); document.getElementById('currentYear').textContent = currentYear;

 // back to top
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