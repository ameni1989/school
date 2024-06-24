import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listbus',
  templateUrl: './listbus.component.html',
  styleUrls: ['./listbus.component.css'],
})
export class ListbusComponent {
  // paginate:number = 1;
  // bus = [
  //   {marque : 'toyota' , serie: '111tu9999',couleur:'blanc', nbplace:'25', nbsurcharge:'5'},
  //   {marque : 'toyota' , serie: '123tu9999',couleur:'blanc', nbplace:'35', nbsurcharge:'5'},
  //   {marque : 'autocar' , serie: '100tu9999',couleur:'blanc', nbplace:'45', nbsurcharge:'10'},
  //   {marque : 'autocar' , serie: '99tu9999',couleur:'blanc', nbplace:'45', nbsurcharge:'10'},
  //   {marque : 'toyota' , serie: '88tu9999',couleur:'blanc', nbplace:'45', nbsurcharge:'10'}

  // ];
  constructor(public _base: BaseService) {}

  paginate: number = 1;
  // agents = [
  //   {nom : 'agent 1' , prenom: 'agent1', telephone:'222222222'},
  //   {nom : 'agent 2' , prenom: 'agent2', telephone:'222222222'},
  //   {nom : 'agent 3' , prenom: 'agent3', telephone:'222222222'},
  //   {nom : 'agent 4' , prenom: 'agent4', telephone:'222222222'},
  //   {nom : 'agent 5' , prenom: 'agent5', telephone:'222222222'},
  //   {nom : 'agent 6' , prenom: 'agent6', telephone:'222222222'}
  //    ];
  session: any;
  bus: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);
      if (this.session._id) {
        this._base
          .afficherbusparecole(this.session._id)

          .subscribe({
            next: (res: {}) => {
              this.bus = res;
            },
            error: (e) => console.log(e),
          });
      }
    }
  }
  circuits: any;
  supprimer(idb: any) {
    // console.log(ida);
    this._base.affichercircuitparbus(idb).subscribe({
      next: (res: {}) => {
        this.circuits = res;
        console.log(this.circuits);
        if (this.circuits.length != 0) {
          alert(
            'Vous ne pouvez pas supprimer ce bus car il a des circuits en cours !'
          );
        } else {
          //
          Swal.fire({
            title: 'Etes vous sûre de vouloir supprimer ce bus ?',
            text: 'veuillez confirmer !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'oui, supprimer',
          }).then((result) => {
            if (result.isConfirmed) {
              this._base.supprimerbus(idb).subscribe({
                next: (res) => {
                  Swal.fire('supprimé!, bus  supprimé', 'success');
                  console.log(res);
                  this.ngOnInit();
                },
                error: () => {
                  alert('une erreur est survenue');
                },
              });
            }
          });
          //
        }
      },
      error: (e) => console.log(e),
    });
  }
  nvbus: any = {
    marque: '',
    serie: '',
    couleur: '',
    place: '',
    surcharge: '',
  };
  idamodifier: any;
  busadmodifier(id: any) {
    this.idamodifier = id;
    this._base.busparid(this.idamodifier).subscribe({
      next: (res) => {
        this.nvbus = res;
      },
    });
  }

  modifierbus() {
    this._base
      .modifierbus(this.idamodifier, this.nvbus)

      .subscribe({
        next: (res) => {
          alert(this.nvbus.serie + '  modifié avec succes');
          this.ngOnInit();
        },
        error: (err) => {
          console.log('erreur');
        },
      });
  }
}
