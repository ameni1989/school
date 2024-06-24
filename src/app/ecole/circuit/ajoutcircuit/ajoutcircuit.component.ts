import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutcircuit',
  templateUrl: './ajoutcircuit.component.html',
  styleUrls: ['./ajoutcircuit.component.css'],
})
export class AjoutcircuitComponent {
  constructor(public _base: BaseService, public router: Router) {}

  arrets: any;
  bus: any;
  agents: any;
  session: any;

  todo: {
    idarret: string;
    nomarret: string;
    latitude: string;
    longitude: string;
  }[] = [];
  done: {
    idarret: string;
    nomarret: string;
    latitude: string;
    longitude: string;
  }[] = [];

  type: any;
  nomcircuit: any;
  heure: any;
  agent: any;
  lebus: any;

  nvcircuit = {
    nom: '',
    type: '',
    heure: '',
    idecole: '',
    idagent: '',
    idbus: '',
    idarrets: [] as {
      idarret: string;
      nomarret: string;
      latitude: string;
      longitude: string;
    }[],
  };

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);
      if (this.session._id) {
        this._base.afficherarretparecole(this.session._id).subscribe({
          next: (res) => {
            this.arrets = res;
            console.log(this.arrets);
            for (let i = 0; i < this.arrets.length; i++) {
              this.todo.push({
                idarret: this.arrets[i]._id,
                nomarret: this.arrets[i].nom,
                latitude: this.arrets[i].latitude,
                longitude: this.arrets[i].longitude,
              });
            }

            this.todo.push({
              idarret: this.session._id,
              nomarret: this.session.nom,
              latitude: this.session.latitude,
              longitude: this.session.longitude,
            });
            console.log(this.todo);
          },
          error: (err) => {
            console.log(err);
          },
        });

        this._base.afficherbusparecole(this.session._id).subscribe({
          next: (res) => {
            this.bus = res;
          },
          error: (err) => {
            console.log(err);
          },
        });

        this._base.afficheragentparecole(this.session._id).subscribe({
          next: (res) => {
            this.agents = res;
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    }
  }

  drop(
    event: CdkDragDrop<
      {
        idarret: string;
        nomarret: string;
        latitude: string;
        longitude: string;
      }[]
    >
  ) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (this.done[0].idarret == this.session._id) {
      this.type = 'retour';
    } else if (this.done[this.done.length - 1].idarret == this.session._id) {
      this.type = 'ramassage';
    } else {
      this.type = '';
    }
  }

  ajouter() {
    console.log(this.nvcircuit.type);

    this.nvcircuit.nom = this.nomcircuit;
    this.nvcircuit.type = this.type;
    this.nvcircuit.heure = this.heure;
    this.nvcircuit.idecole = this.session._id;
    this.nvcircuit.idagent = this.agent;
    this.nvcircuit.idbus = this.lebus;
    this.nvcircuit.idarrets = this.done.map((elem) => ({
      idarret: elem.idarret,
      nomarret: elem.nomarret,
      latitude: elem.latitude,
      longitude: elem.longitude,
    }));

    // if (
    //   this.nvcircuit.nom == undefined ||
    //   this.nvcircuit.type == undefined ||
    //   this.nvcircuit.type == '' ||
    //   this.nvcircuit.heure == undefined ||
    //   this.nvcircuit.idagent == undefined ||
    //   this.nvcircuit.idbus == undefined
    // this.nvcircuit.idarrets.length == 0
    // ) {
    //   console.log('ajout de ', this.nvcircuit);
    //   alert('Tous les champs doivent être remplis !');
    // } else {
    console.log('ajout de ', this.nvcircuit);
    this._base.creecircuit(this.nvcircuit).subscribe({
      next: (data) => {
        alert('circuit ajouter ');
        this.router.navigate(['/ecole/circuit/listcircuit']);
      },
      error: (err) => console.log(err),
    });
  }
  // }
}
