import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(public _base: BaseService) {}

  date: any;
  heure: any;
  idagent: any;
  agent: any;
  agents: any;
  idecole = '65776ead9028c66831410238';
  ngOnInit() {
    this._base.afficheragentparecole(this.idecole).subscribe({
      next: (res) => {
        this.agents = res;
        // console.log(this.agents);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getagent() {
    this._base.agentparid(this.idagent).subscribe({
      next: (res) => {
        this.agent = res;
      },
    });
  }
  instance: any;
  eleveramasse: any;
  listeleveramasse: any[] = [];
  listeleveabsent: any[] = [];

  leseleves: any[] = [];
  leseleves2: any[] = [];

  // afficher1() {
  //   this._base
  //     .instancepartempsetagent(this.date, this.heure, this.idagent)
  //     .subscribe({
  //       next: (res) => {
  //         this.instance = res;
  //         // console.log(this.instance);
  //         this.listeleveramasse = this.instance[0].ramasse;
  //         // console.log(this.listeleveramasse);
  //         for (let i = 0; i < this.listeleveramasse.length; i++) {
  //           this._base.eleveparid(this.listeleveramasse[i].ideleve).subscribe({
  //             next: (res) => {
  //               this.eleveramasse = res;
  //               // console.log(this.eleveramasse);
  //               this.leseleves.push(this.eleveramasse);
  //             },
  //           });
  //         }
  //         console.log(this.leseleves);
  //       },
  //     });
  // }

  afficher() {
    this._base
      .instancepartempsetagent(this.date, this.heure, this.idagent)
      .subscribe({
        next: (res) => {
          this.instance = res;
          this.listeleveramasse = this.instance[0].valide;

          const observables = this.listeleveramasse.map((item) =>
            this._base.eleveparid(item.ideleve)
          );

          forkJoin(observables).subscribe({
            next: (responses) => {
              this.leseleves = responses;
            },
            error: (err) => {
              console.log(err);
            },
          });
        },
      });
  }
  afficher2() {
    this._base
      .instancepartempsetagent(this.date, this.heure, this.idagent)
      .subscribe({
        next: (res) => {
          this.instance = res;
          this.listeleveabsent = this.instance[0].absent;

          const observables2 = this.listeleveabsent.map((item) =>
            this._base.eleveparid(item.ideleve)
          );

          forkJoin(observables2).subscribe({
            next: (responses) => {
              this.leseleves2 = responses;
            },
            error: (err) => {
              console.log(err);
            },
          });
        },
      });
  }
  eleves: any;
  type: any;
  circuit: any;
  nomarret: any;
  existe = false;
  heurea: any;
  arret: any;
  listeleve(type: any, circuit: any, arret: any, nomarret: any, heure: any) {
    this.type = type;
    this.circuit = circuit;
    this.arret = arret;
    this.nomarret = nomarret;
    this.heurea = heure;
    if (this.arret != this.idecole) {
      this.existe = true;
      if (type == 'ramassage') {
        this._base.affichereleveramassage(this.arret, this.heurea).subscribe({
          next: (res) => {
            this.eleves = res;
            console.log(this.eleves);
            console.log(this.heurea);
          },
          error: (err) => {
            console.log(err);
          },
        });
      } else {
        this._base.affichereleveretour(this.arret, this.heurea).subscribe({
          next: (res) => {
            this.eleves = res;
            console.log(this.eleves);
            console.log(this.heurea);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    } else {
      this.existe = false;
    }
  }
  eleve = {
    ideleve: '',
  };
  valider(e: any) {
    this.eleve.ideleve = e;
    this._base.ramasseouretour(this.instance[0]._id, this.eleve).subscribe({
      next: () => {
        alert('eleve ramassé');
        this.afficher();
        this.eleve.ideleve = '';
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  sabsenter(e: any) {
    this.eleve.ideleve = e;
    this._base.absenteleveouparent(this.instance[0]._id, this.eleve).subscribe({
      next: () => {
        alert('absent');
        this.afficher2();
        this.eleve.ideleve = '';
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  appelerDeuxFonctions() {
    this.afficher();
    this.afficher2();
  }
}
