class Ville {
  public nomville: string;
  public nbrehabitantville: number;
  public codedpt: number;
  constructor(nomville, nbrehabitantville, codedpt) {
    this.nomville = nomville;
    this.nbrehabitantville = nbrehabitantville;
    this.codedpt = codedpt;
  }
}

function recupererValeurInputCommune() {
  let inputVille = (document.querySelector("#commune") as HTMLInputElement)
    .value;
  return inputVille;
}

function recupererCommune(villeRecherchee: string) {
  return fetch("http://geo.api.gouv.fr/communes?nom=" + villeRecherchee).then(
    (res) => {
      return res.json().then(function (data) {
        let tabVilleRecuperee: Ville[] = [];
        for (const statRecuperee of data) {
          tabVilleRecuperee.push(
            new Ville(
              statRecuperee.nom,
              statRecuperee.population,
              statRecuperee.codeDepartement
            )
          );
        }
        console.log(tabVilleRecuperee);

        return tabVilleRecuperee;
      });
    }
  );
}
document.querySelector("form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  let villeRecherchee = recupererValeurInputCommune();
  recupererCommune(villeRecherchee).then((communes) => {
      communes.forEach(infos => {
          document.querySelector("#maliste").innerHTML+=`<ul>
          <li>${infos.nomville}</li>
          <li>${infos.nbrehabitantville}</li>
          <li>${infos.codedpt}</li>
          </ul>`
          
      });
  }
});


