var _a;
class Ville {
    constructor(nomville, nbrehabitantville, codedpt) {
        this.nomville = nomville;
        this.nbrehabitantville = nbrehabitantville;
        this.codedpt = codedpt;
    }
}
function recupererValeurInputCommune() {
    let inputVille = document.querySelector("#commune")
        .value;
    return inputVille;
}
function recupererCommune(villeRecherchee) {
    return fetch("http://geo.api.gouv.fr/communes?nom=" + villeRecherchee).then((res) => {
        return res.json().then(function (data) {
            let tabVilleRecuperee = [];
            for (const statRecuperee of data) {
                tabVilleRecuperee.push(new Ville(statRecuperee.nom, statRecuperee.population, statRecuperee.codeDepartement));
            }
            console.log(tabVilleRecuperee);
            return tabVilleRecuperee;
        });
    });
}
(_a = document.querySelector("form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (e) {
    e.preventDefault();
    let villeRecherchee = recupererValeurInputCommune();
    recupererCommune(villeRecherchee).then((communes) => {
        communes.forEach(infos => {
            document.querySelector("#maliste").innerHTML += `<ul>
          <li>${infos.nomville}</li>
          <li>${infos.nbrehabitantville}</li>
          <li>${infos.codedpt}</li>
          </ul>`;
        });
    });
});
