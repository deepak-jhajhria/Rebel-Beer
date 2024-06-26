//================== NAVBAR JS
const Navbar = document.getElementById("NavBar");

function openNav() {
    Navbar.classList.toggle("left-0");
    document.body.classList.toggle("overflow_hidden");
}
function closeNav() {
    Navbar.classList.remove("left-0");
    document.body.classList.remove("overflow_hidden");
}
