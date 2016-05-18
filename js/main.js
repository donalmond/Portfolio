window.onload = function initElement() {

  var p = document.getElementById("potion");
  p.onclick = showAlert;
};
function showAlert() {
  console.log("I work");
}
