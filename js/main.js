document.getElementById("year").textContent = new Date().getFullYear();
var toggle = document.getElementById("navToggle");
var nav = document.getElementById("siteNav");
if (toggle && nav) {
  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}
