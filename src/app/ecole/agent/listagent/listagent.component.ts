import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listagent',
  templateUrl: './listagent.component.html',
  styleUrls: ['./listagent.component.css'],
})
export class ListagentComponent {
  constructor(public _base: BaseService) {}

  paginate: number = 1;

  session: any;
  agents: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);
      if (this.session._id) {
        this._base
          .afficheragentparecole(this.session._id)

          .subscribe({
            next: (res: {}) => {
              this.agents = res;
            },
            error: (e) => console.log(e),
          });
      }
    }
  }
  circuits: any;
  supprimer(ida: any) {
    // console.log(ida);
    this._base.affichercircuitparagent(ida).subscribe({
      next: (res: {}) => {
        this.circuits = res;
        console.log(this.circuits);
        if (this.circuits.length != 0) {
          alert(
            'Vous ne pouvez pas supprimer cet agent car il a des circuits en cours !'
          );
        } else {
          //
          Swal.fire({
            title: 'Etes vous sûre de vouloir supprimer cet agent ?',
            text: 'veuillez confirmer !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ffbc00',
            cancelButtonColor: '#858585',
            confirmButtonText: 'oui, supprimer',
          }).then((result) => {
            if (result.isConfirmed) {
              this._base.supprimeragent(ida).subscribe({
                next: (res) => {
                  Swal.fire('supprimé!, agent  supprimé', 'success');
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
  nvagent: any = {
    nomprenom: '',
    telephone: '',
  };
  idamodifier: any;
  agentadmodifier(id: any) {
    this.idamodifier = id;
    this._base.agentparid(this.idamodifier).subscribe({
      next: (res) => {
        this.nvagent = res;
      },
    });
  }

  modifieragent() {
    this._base
      .modifieragent(this.idamodifier, this.nvagent)

      .subscribe({
        next: (res) => {
          alert(this.nvagent.nomprenom + '  modifié avec succes');
          this.ngOnInit();
        },
        error: (err) => {
          console.log('erreur');
        },
      });
  }
}
