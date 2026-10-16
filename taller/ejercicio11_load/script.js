var cargando = document.getElementById("cargando");

window.addEventListener("load", function () {
  setTimeout(function () {
    cargando.style.display = "none";
  }, 3000);   // 3000 ms = 3 segundos
});
