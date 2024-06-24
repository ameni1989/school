import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-ajouteleve',
  templateUrl: './ajouteleve.component.html',
  styleUrls: ['./ajouteleve.component.css'],
})
export class AjouteleveComponent {
  constructor(public _base: BaseService, public router: Router) {}
  image: any;
  selectimage(i: any) {
    this.image = i.target.files[0];
  }
  session: any;
  nomeleve: any;
  parents: any;
  nomparent: any;
  classe: any;
  ramassage: any;
  retour: any;
  arretramassage: any;
  arretretour: any;
  heureramassage: any;
  heureretour: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;

      console.log(this.session._id);

      this._base.afficherparecole(this.session._id).subscribe({
        next: (res) => {
          this.parents = res;
        },
        error: (err) => {
          console.log(err);
        },
      });

      this._base.afficherarretparecole(this.session._id).subscribe({
        next: (res) => {
          this.ramassage = res;
          this.retour = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  ajouter() {
    let data = new FormData();
    data.append('nomprenom', this.nomeleve);
    data.append('heureramassage', this.heureramassage);
    data.append('heureretour', this.heureretour);

    data.append('idecole', this.session._id);
    data.append('classe', this.classe);
    data.append('idparent', this.nomparent);
    data.append('image', this.image);
    if (this.arretretour != undefined) {
      data.append('idretour', this.arretretour);
    }
    if (this.arretramassage != undefined) {
      data.append('idramassage', this.arretramassage);
    }

    this._base.creeeleve(data).subscribe({
      next: (data) => {
        alert('eleve ajouter ');
        this.router.navigate(['/ecole/eleve/listeleve']);
      },
      error: (err) => console.log('erreur'),
    });
  }

  test() {
    console.log(this.arretretour + this.arretramassage);
  }
}
