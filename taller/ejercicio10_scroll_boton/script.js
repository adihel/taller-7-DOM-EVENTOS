var menu = document.getElementById("menu");
var subir = document.getElementById("subir");

window.addEventListener("scroll", function () {
  // Color del menú (ejercicio 9)
  if (window.scrollY > 50) {
    menu.classList.add("scroll");
  } else {
    menu.classList.remove("scroll");
  }

  // Botón: aparece al bajar y se oculta arriba
  if (window.scrollY > 200) {
    subir.style.display = "block";
  } else {
    subir.style.display = "none";
  }
});

subir.addEventListener("click", function () {
  window.scrollTo(0, 0);   // sube; al llegar arriba el scroll oculta el botón
});
