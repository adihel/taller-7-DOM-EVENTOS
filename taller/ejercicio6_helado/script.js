var sabores = document.getElementById("sabores");
var resultado = document.getElementById("resultado");

sabores.addEventListener("change", function () {
  if (sabores.value === "") {
    resultado.textContent = "";
  } else {
    resultado.textContent = "Escogiste el helado de " + sabores.value;
  }
});
