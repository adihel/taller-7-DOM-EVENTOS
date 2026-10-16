var menu = document.getElementById("menu");
var boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  // si la clase "responsive" no está la pone, y si está la quita
  menu.classList.toggle("responsive");
});
