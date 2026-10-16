var menu = document.getElementById("menu");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    menu.classList.add("scroll");      // al bajar cambia el color
  } else {
    menu.classList.remove("scroll");   // arriba vuelve al color anterior
  }
});
