//------------  prelordr
var loader = document.getElementById("prelorder");
window.addEventListener("lord", function () {
  loader.style.display = "none";
});

//----------- type js
var typed = new Typed(".type", {
  strings: ["Mahibul islam", "A Digital Marketer.", "A SEO Expert."],

  typeSpeed: 50,
  backSpeed: 15,
  loop: true,
  loopCount: Infinity,
});
//   ----------------      nav js

var menu = document.getElementById("menu");
var menu2 = document.getElementById("menu2");

menu.onclick = function () {
  menu.classList.toggle("openmenu");
  menu2.classList.toggle("menu3");
};
