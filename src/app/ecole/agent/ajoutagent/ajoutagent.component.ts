import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-ajoutagent',
  templateUrl: './ajoutagent.component.html',
  styleUrls: ['./ajoutagent.component.css'],
})
export class AjoutagentComponent {
  constructor(private _base: BaseService, private router: Router) {}

  session: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);
    }
  }
  nvagent = {
    nomprenom: '',
    idecole: '',
    telephone: '',
  };
  nom: any;
  tel: any;
  creeagent() {
    this.nvagent.nomprenom = this.nom;
    this.nvagent.telephone = this.tel;
    this.nvagent.idecole = this.session._id;

    this._base.creeagent(this.nvagent).subscribe({
      next: (data) => {
        alert('agent ajouter ');
        this.router.navigate(['/ecole/agent/listagent']);
      },
      error: (err) => console.log('erreur'),
    });
  }
}
