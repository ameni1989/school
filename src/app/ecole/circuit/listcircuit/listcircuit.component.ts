import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcircuit',
  templateUrl: './listcircuit.component.html',
  styleUrls: ['./listcircuit.component.css'],
})
export class ListcircuitComponent {
  [x: string]: any;
  constructor(public _base: BaseService) {}
  paginate: number = 1;
  session: any;

  circuits: any;
  idagent: any;
  agent: any;
  arret: any;
  nb: any;
  agents: any;
  bus: any;
  lebus: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);
      if (this.session._id) {
        this._base.affichercircuitparecole(this.session._id).subscribe({
          next: (res) => {
            this.circuits = res;
            console.log(this.circuits);

            for (let i = 0; i < this.circuits.length; i++) {
              let t = this.circuits[i].type;
              let x = this.circuits[i].idarrets;
              console.log(this.circuits[i].nom);

              // Convert each circuit's idarrets array of arrays to array of objects
              this.circuits[i].idarrets = x.map((arret: any) => {
                return {
                  idarret: arret.idarret,
                  nomarret: arret.nomarret,
                  latitude: arret.latitude,
                  longitude: arret.longitude,
                };
              });
            }
            console.log('Processed Circuits:', this.circuits);
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

  eleves: any;
  type: any;
  circuit: any;
  nomarret: any;
  existe = false;
  heure: any;
  listeleve(type: any, circuit: any, arret: any, nomarret: any, heure: any) {
    this.type = type;
    this.circuit = circuit;
    this.arret = arret;
    this.nomarret = nomarret;
    this.heure = heure;
    if (this.arret != this.session._id) {
      this.existe = true;
      if (type == 'ramassage') {
        this._base.affichereleveramassage(this.arret, this.heure).subscribe({
          next: (res) => {
            this.eleves = res;
            console.log(this.eleves);
            console.log(this.heure);
          },
          error: (err) => {
            console.log(err);
          },
        });
      } else {
        this._base.affichereleveretour(this.arret, this.heure).subscribe({
          next: (res) => {
            this.eleves = res;
            console.log(this.eleves);
            console.log(this.heure);
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
  supprimer(id: any) {
    Swal.fire({
      title: 'vous etes sure de supprimer?',
      text: 'veuillez confirmer !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui, supprimer',
    }).then((result) => {
      if (result.isConfirmed) {
        this._base.supprimercircuit(id).subscribe({
          next: (res) => {
            Swal.fire('supprimé!, circuit  supprimé', 'success');
            console.log(res);
            this.ngOnInit();
          },
          error: () => {
            alert('une erreur est survenue');
          },
        });
      }
    });
  }
  nvcircuit: any;
  idamodifier: any;
  circuitmodif = {
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
  circuitadmodifier(id: any) {
    this.idamodifier = id;
    this._base.circuitparid(this.idamodifier).subscribe({
      next: (res) => {
        this.nvcircuit = res;
        this.circuitmodif = this.nvcircuit;

        console.log(this.nvcircuit);
      },
    });
  }
  heuremodif: any;

  modifiercircuit() {
    this.circuitmodif.idbus = this.lebus;
    this.circuitmodif.idagent = this.agent;
    this.circuitmodif.heure = this.heuremodif;
    this._base
      .modifiercircuit(this.idamodifier, this.circuitmodif)

      .subscribe({
        next: (res) => {
          alert('  modifié avec succes');
          this.ngOnInit();
          location.reload();
        },
        error: (err) => {
          console.log('erreur');
        },
      });
  }
}
