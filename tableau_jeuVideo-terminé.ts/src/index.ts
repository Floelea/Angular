import "./style.css";

import { Jeu, tabJeu } from "./listejeu";

let editMode: boolean = false;

let jeuencouredition: Jeu;

function affichermesjeux(mesJeux: Jeu[]) {
  for (const jeux of mesJeux) {
    afficherunjeu(jeux);
  }
}

function afficherunjeu(UnJeu: Jeu) {
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
    let indexJeux = tabJeu.indexOf(UnJeu);
    if (indexJeux != -1) tabJeu.splice(indexJeux, 1);
    console.log(tabJeu);
  });

  boutonModif.addEventListener("click", function () {
    editMode = true;
    jeuencouredition = UnJeu;
    (<HTMLInputElement>document.getElementById("nomjeu")).value =
      UnJeu.nomdujeu;
    (<HTMLInputElement>document.getElementById("genrejeu")).value = UnJeu.genre;
    (<HTMLInputElement>document.getElementById("editeurjeu")).value =
      UnJeu.editeur;
    (<HTMLInputElement>document.getElementById("pegijeu")).valueAsNumber =
      UnJeu.PEGI;
    (<HTMLInputElement>document.getElementById("anneejeu")).valueAsNumber =
      UnJeu.anneedesortie;
    (<HTMLOptionElement>document.getElementById("multijoueur")).value =
      UnJeu.multijoueur;
    (<HTMLOptionElement>document.getElementById("enligne")).value =
      UnJeu.enligne;
    (<HTMLInputElement>document.getElementById("image")).value = UnJeu.image;

    console.log(UnJeu.nomdujeu);
  });

  maDiv?.append(maNouvelleDiv);
  maNouvelleDiv.append(boutonSup);
  maNouvelleDiv.append(boutonModif);
}

function remplacervaleurinput(UnJeu: Jeu) {
  UnJeu.nomdujeu = (<HTMLInputElement>document.getElementById("nomjeu")).value;
  UnJeu.genre = (<HTMLInputElement>document.getElementById("genrejeu")).value;
  UnJeu.editeur = (<HTMLInputElement>(
    document.getElementById("editeurjeu")
  )).value;

  UnJeu.PEGI = parseInt(
    (<HTMLInputElement>document.getElementById("pegijeu")).value
  );
  UnJeu.anneedesortie = parseInt(
    (<HTMLInputElement>document.getElementById("anneejeu")).value
  );
  UnJeu.multijoueur = (<HTMLOptionElement>(
    document.getElementById("multijoueur")
  )).value;
  UnJeu.enligne = (<HTMLOptionElement>document.getElementById("enligne")).value;
  UnJeu.image = (<HTMLInputElement>document.getElementById("image")).value;
  console.log(tabJeu);
}
function recuperervaleurinput() {
  let unJeu = new Jeu(
    (<HTMLInputElement>document.getElementById("nomjeu")).value,
    (<HTMLInputElement>document.getElementById("genrejeu")).value,
    (<HTMLInputElement>document.getElementById("editeurjeu")).value,
    parseInt((document.getElementById("pegijeu") as HTMLInputElement).value),
    parseInt((<HTMLInputElement>document.getElementById("anneejeu")).value),
    (<HTMLOptionElement>document.getElementById("multijoueur")).value,
    (<HTMLOptionElement>document.getElementById("enligne")).value,
    (<HTMLInputElement>document.getElementById("image")).value
  );
  tabJeu.push(unJeu);
  console.log(tabJeu);
  afficherunjeu(unJeu);
}

document.querySelector("form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  if (editMode) {
    remplacervaleurinput(jeuencouredition);
  } else {
    recuperervaleurinput();
  }
});

affichermesjeux(tabJeu);
