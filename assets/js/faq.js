function openNav() {
  document.getElementById("navbar").classList.toggle("left-0");
  document.body.classList.toggle("overflow_hidden");
  document.querySelector(".menu").classList.toggle("cross");
}
document.addEventListener("DOMContentLoaded", function () {
  const firstAccordion = document.querySelector(".container .border");
  firstAccordion.classList.add("active-border");
  firstAccordion.querySelector(".accordion-content").style.maxHeight = "300px";
  firstAccordion.querySelector(".plus-icon").classList.add("hidden");
  firstAccordion.querySelector(".minus-icon").classList.remove("hidden");
});

function toggleAccordion(element) {
  const accordion = element.parentElement;
  const content = accordion.querySelector(".accordion-content");

  if (accordion.classList.contains("active-border")) {
    content.style.maxHeight = 0;
    accordion.classList.remove("active-border");
    element.querySelector(".plus-icon").classList.remove("hidden");
    element.querySelector(".minus-icon").classList.add("hidden");
  } else {
    const allAccordions = document.querySelectorAll(".container .border");
    allAccordions.forEach((acc) => {
      acc.classList.remove("active-border");
      acc.querySelector(".accordion-content").style.maxHeight = 0;
      acc.querySelector(".plus-icon").classList.remove("hidden");
      acc.querySelector(".minus-icon").classList.add("hidden");
    });

    content.style.maxHeight = content.scrollHeight + "px";
    accordion.classList.add("active-border");
    element.querySelector(".plus-icon").classList.add("hidden");
    element.querySelector(".minus-icon").classList.remove("hidden");
  }
}
// year function
const currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;
  // back to top
  function backtotop() {
    window.scroll(0, 0);
}
window.addEventListener("scroll", function() {
    let backtotop = document.getElementById("backtotop");
    if (window.scrollY > 150) {
        backtotop.style.display = "block";
    } else {
        backtotop.style.display = "none";
    }
});