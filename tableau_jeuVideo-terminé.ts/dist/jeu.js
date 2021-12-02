"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jeu = void 0;
class Jeu {
    constructor(nomdujeu, genre, editeur, PEGI, anneedesortie, multijoueur, enligne, image) {
        (this.nomdujeu = nomdujeu),
            (this.genre = genre),
            (this.editeur = editeur),
            (this.PEGI = PEGI),
            (this.anneedesortie = anneedesortie),
            (this.multijoueur = multijoueur),
            (this.enligne = enligne),
            (this.image = image);
    }
}
exports.Jeu = Jeu;
