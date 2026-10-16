var botones = document.querySelectorAll(".sesion");

for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
