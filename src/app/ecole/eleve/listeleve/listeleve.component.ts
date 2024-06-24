import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listeleve',
  templateUrl: './listeleve.component.html',
  styleUrls: ['./listeleve.component.css'],
})
export class ListeleveComponent {
  constructor(public base: BaseService) {}
  paginate: number = 1;
  itemsPerPage: number = 5;
  chercher: any;
  eleves: any;
  session: any;
  ramassage: any;
  retour: any;
  parents: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);
      if (this.session._id) {
        this.base.affichereleveparecole(this.session._id).subscribe({
          next: (res) => {
            this.eleves = res;
            console.log(this.eleves);
          },
          error: (err) => {
            console.log(err);
          },
        });

        this.base.afficherparecole(this.session._id).subscribe({
          next: (res) => {
            this.parents = res;
          },
          error: (err) => {
            console.log(err);
          },
        });

        this.base.afficherarretparecole(this.session._id).subscribe({
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
        this.base.supprimereleve(id).subscribe({
          next: (res) => {
            Swal.fire("supprimé!, l'élève est supprimé", 'success');
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
  nveleve: any = {
    nomprenom: '',
    classe: '',
    image: '',
    idparent: '',
    idramassage: '',
    idretour: '',
    heureramassage: '',
    heureretour: '',
  };
  idamodifier: any;

  eleveadmodifier(id: any) {
    this.idamodifier = id;
    this.base.eleveparid(this.idamodifier).subscribe({
      next: (res) => {
        this.nveleve = res;
      },
    });
  }
  idretour: any;
  idramassage: any;
  idparent: any;
  image: any;
  selectimage(i: any) {
    this.image = i.target.files[0];
  }
  modifiereleve() {
    this.nveleve.idparent = this.idparent;
    this.nveleve.idramassage = this.idramassage;
    this.nveleve.idretour = this.idretour;
    let data = new FormData();
    data.append('nomprenom', this.nveleve.nomprenom);
    data.append('classe', this.nveleve.classe);
    data.append('heureramassage', this.nveleve.heureramassage);
    data.append('heureretour', this.nveleve.heureretour);

    if (this.nveleve.idparent != undefined) {
      data.append('idparent', this.nveleve.idparent);
    }
    if (this.nveleve.idramassage != undefined) {
      data.append('idramassage', this.nveleve.idramassage);
    }

    if (this.nveleve.idretour != undefined) {
      data.append('idretour', this.nveleve.idretour);
    }
    if (this.image) {
      data.append('image', this.image);
    }
    // console.log(this.nveleve);

    this.base
      .modifiereleve(this.idamodifier, data)

      .subscribe({
        next: (res) => {
          alert(this.nveleve.nomprenom + '  modifié avec succes');
        },
        error: (err) => {
          console.log('erreur front');
        },
      });
    this.ngOnInit();
    location.reload();
  }
}
