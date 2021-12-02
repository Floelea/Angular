function addition() {
  var chiffre1 = parseInt(document.querySelector("#chiffre1").value);
  var chiffre2 = parseInt(document.querySelector("#chiffre2").value);
  var resultat = chiffre1 + chiffre2;
  alert(resultat);
}
document.addEventListener("submit", function (e) {
  e.preventDefault();
  addition();
});
