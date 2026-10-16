var check = document.getElementById("check");
var info = document.getElementById("info");

check.addEventListener("change", function () {
  if (check.checked) {
    info.style.display = "block";
  } else {
    info.style.display = "none";
  }
});
