// "use strict";

// let panier = [];

// function sauvegardearticle() {
//   let liste = {};
//   liste.produit = document.getElementById("produit").value;
//   liste.quantite = document.getElementById("quantite").value;
//   panier.push(liste);
//   console.log(panier);
//   afficherpanier();
// }

// function afficherpanier() {
//   document.querySelector(
//     "#liste"
//   ).innerHTML += `<li>Article : ${liste.produit} - Quantité : ${liste.quantite}</li>`;
// }

// let boutonpanier = document
//   .querySelector("#boutonajouter")
//   .addEventListener("click", sauvegardearticle);

// boutonpanier = document
//   .querySelector("#boutonajouter")
//   .addEventListener("click", afficherpanier);

let tabFac = [
  { numero: 123456, montant: 580 },
  { numero: 236456, montant: 965 },
  { numero: 985632, montant: 214 },
  { numero: 985632, montant: 244 },
];

function recherchetableau(valeur) {
  let i = 0;
  let indexmontant = false;
  while (i < tabFac.length && indexmontant == false) {
    indexmontant = valeur == tabFac[i].montant;
    console.log(indexmontant);
    i++;
  }
  if (indexmontant) {
    return i - 1;
  } else return -1;
}
console.log(recherchetableau(965));

// let tabNombres = [1, 2, 3, 4];

// for (let i = 0; i < tabNombres.length; i++) {
//   console.log(tabNombres[i]);
// }

// let i = 0;
// while (i < tabNombres.length) {
//   console.log(tabNombres[i]);
//   i++;
// }
