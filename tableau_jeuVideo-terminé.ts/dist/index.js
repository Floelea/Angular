"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const listejeu_1 = require("./listejeu");
let editMode = false;
let jeuencouredition;
function affichermesjeux(mesJeux) {
    for (const jeux of mesJeux) {
        afficherunjeu(jeux);
    }
}
function afficherunjeu(UnJeu) {
    let maDiv = document.querySelector("#maliste");
    let maNouvelleDiv = document.createElement("div");
    maNouvelleDiv.innerHTML += `<ul>
  <li>${UnJeu.nomdujeu}</li>
  <li>${UnJeu.genre}</li>
  <li>${UnJeu.editeur}</li>
  <li>${UnJeu.PEGI}</li>
  <li>${UnJeu.anneedesortie}</li>
  <li>${UnJeu.multijoueur}</li>
  <li>${UnJeu.enligne}</li>
  <li><img src=${UnJeu.image}></li>
  </ul>`;
    let boutonSup = document.createElement("button");
    boutonSup.innerText = "SUPPRIMER";
    let boutonModif = document.createElement("button");
    boutonModif.innerText = "MODIFIER";
    boutonSup.addEventListener("click", function () {
        maNouvelleDiv.remove();
        let indexJeux = listejeu_1.tabJeu.indexOf(UnJeu);
        if (indexJeux != -1)
            listejeu_1.tabJeu.splice(indexJeux, 1);
        console.log(listejeu_1.tabJeu);
    });
    boutonModif.addEventListener("click", function () {
        editMode = true;
        jeuencouredition = UnJeu;
        document.getElementById("nomjeu").value =
            UnJeu.nomdujeu;
        document.getElementById("genrejeu").value = UnJeu.genre;
        document.getElementById("editeurjeu").value =
            UnJeu.editeur;
        document.getElementById("pegijeu").valueAsNumber =
            UnJeu.PEGI;
        document.getElementById("anneejeu").valueAsNumber =
            UnJeu.anneedesortie;
        document.getElementById("multijoueur").value =
            UnJeu.multijoueur;
        document.getElementById("enligne").value =
            UnJeu.enligne;
        document.getElementById("image").value = UnJeu.image;
        console.log(UnJeu.nomdujeu);
    });
    maDiv === null || maDiv === void 0 ? void 0 : maDiv.append(maNouvelleDiv);
    maNouvelleDiv.append(boutonSup);
    maNouvelleDiv.append(boutonModif);
}
function remplacervaleurinput(UnJeu) {
    UnJeu.nomdujeu = document.getElementById("nomjeu").value;
    UnJeu.genre = document.getElementById("genrejeu").value;
    UnJeu.editeur = (document.getElementById("editeurjeu")).value;
    UnJeu.PEGI = parseInt(document.getElementById("pegijeu").value);
    UnJeu.anneedesortie = parseInt(document.getElementById("anneejeu").value);
    UnJeu.multijoueur = (document.getElementById("multijoueur")).value;
    UnJeu.enligne = document.getElementById("enligne").value;
    UnJeu.image = document.getElementById("image").value;
    console.log(listejeu_1.tabJeu);
}
function recuperervaleurinput() {
    let unJeu = new listejeu_1.Jeu(document.getElementById("nomjeu").value, document.getElementById("genrejeu").value, document.getElementById("editeurjeu").value, parseInt(document.getElementById("pegijeu").value), parseInt(document.getElementById("anneejeu").value), document.getElementById("multijoueur").value, document.getElementById("enligne").value, document.getElementById("image").value);
    listejeu_1.tabJeu.push(unJeu);
    console.log(listejeu_1.tabJeu);
    afficherunjeu(unJeu);
}
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    if (editMode) {
        remplacervaleurinput(jeuencouredition);
    }
    else {
        recuperervaleurinput();
    }
});
affichermesjeux(listejeu_1.tabJeu);
