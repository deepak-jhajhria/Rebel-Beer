function openNav() {
    document.getElementById("navbar").classList.toggle("left-0");
    document.body.classList.toggle("overflow_hidden");
    document.querySelector(".menu").classList.toggle("cross");
}    const currentYear = new Date().getFullYear(); document.getElementById('currentYear').textContent = currentYear; 