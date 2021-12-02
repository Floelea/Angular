export class Jeu {
  public nomdujeu: string;
  public genre: string;
  public editeur: string;
  public PEGI: number;
  public anneedesortie: number;
  public multijoueur: string;
  public enligne: string;
  public image: string;

  constructor(
    nomdujeu: string,
    genre: string,
    editeur: string,
    PEGI: number,
    anneedesortie: number,
    multijoueur: string,
    enligne: string,
    image: string
  ) {
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
