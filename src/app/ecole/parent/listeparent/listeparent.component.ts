import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listeparent',
  templateUrl: './listeparent.component.html',
  styleUrls: ['./listeparent.component.css'],
})
export class ListeparentComponent {
  constructor(public _base: BaseService, public router: Router) {}
  paginate: number = 1;
  parents: any;
  session: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      // console.log('data', data);
      this.session = data;
      // console.log(this.session._id);
      if (this.session._id) {
        this._base
          .afficherparecole(this.session._id)
          // this._base.afficher()

          .subscribe({
            next: (res: {}) => {
              this.parents = res;
              // console.log(res);
              //  console.log(this.parents)
            },
            error: (e) => console.log(e),
          });
      }
    }
  }
  eleves: any;
  supprimer(idp: any) {
    Swal.fire({
      title: 'la suppression du parent entraînera la suppression de ces élèves',
      text: 'veuillez confirmer !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui, supprimer',
    }).then((result) => {
      if (result.isConfirmed) {
        this._base.afficherparparent(idp).subscribe({
          next: (res: {}) => {
            this.eleves = res;
            // console.log(this.eleves);
            for (let i = 0; i < this.eleves.length; i++) {
              let ide = this.eleves[i]._id;
              let nome = this.eleves[i].nomprenom;
              console.log(nome);
              console.log(ide);
              this._base.supprimereleve(ide).subscribe({
                next: (res) => {
                  Swal.fire(
                    'supprimé!, Le parent et ses enfants sont supprimés.',
                    'success'
                  );
                  console.log(res);
                  this.ngOnInit();
                },
                error: () => {
                  alert('une erreur est survenue');
                },
              });
            }
          },
          error: (e) => console.log(e),
        });
        this._base.supprimerparent(idp).subscribe({
          next: (res) => {
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
  nvparent: any = {
    nomprenom: '',
    telephone: '',
    email: '',
    adresse: '',
    activation: '',
  };
  idamodifier: any;
  parentadmodifier(id: any) {
    this.idamodifier = id;
    this._base.parentparid(this.idamodifier).subscribe({
      next: (res) => {
        this.nvparent = res;
      },
    });
  }

  modifierparent() {
    this._base
      .modifierparent(this.idamodifier, this.nvparent)

      .subscribe({
        next: (res) => {
          alert(this.nvparent.nomprenom + '  modifié avec succes');
          this.ngOnInit();
        },
        error: (err) => {
          console.log('erreur');
        },
      });
  }
}
