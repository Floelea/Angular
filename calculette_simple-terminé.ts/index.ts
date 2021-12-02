function addition() {
  let chiffre1: number = parseInt(
    (document.querySelector("#chiffre1") as HTMLInputElement).value
  );
  let chiffre2: number = parseInt(
    (document.querySelector("#chiffre2") as HTMLInputElement).value
  );
  let resultat: number = chiffre1 + chiffre2;
  alert(resultat);
}

document.addEventListener("submit", function (e) {
  e.preventDefault();
  addition();
});
