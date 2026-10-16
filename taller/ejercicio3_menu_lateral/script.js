var sidebar = document.getElementById("sidebar");
var abrir = document.getElementById("abrir");
var cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", function () {
  sidebar.style.left = "0";
});

cerrar.addEventListener("click", function () {
  sidebar.style.left = "-200px";
});
