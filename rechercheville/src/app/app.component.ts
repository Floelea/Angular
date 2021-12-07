import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

type ville = {
  nom: string;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rechercheville';
  nomville!: string;
  public tabVilleRecup: ville[] = [];
  constructor(public http: HttpClient) {}
  validerFormulaire() {
    this.http
      .get('http://geo.api.gouv.fr/communes?nom=' + this.nomville)
      .toPromise()
      .then((ville) => {
        this.tabVilleRecup = ville as ville[];
        console.log(this.tabVilleRecup);
      });
  }
}
