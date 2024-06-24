import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

interface Parent {
  nomprenom: string;
  adresse: string;
  telephones: string[];
  email: string;
  idecole: string;
}
@Component({
  selector: 'app-ajoutparent',
  templateUrl: './ajoutparent.component.html',
  styleUrls: ['./ajoutparent.component.css'],
})
export class AjoutparentComponent {
  constructor(public base: BaseService, public router: Router) {}

  nvparent = {
    nomprenom: '',
    adresse: '',
    telephones: [''], // Initialisation avec un numéro de téléphone vide
    email: '',
    idecole: '',
  };

  session: any;

  ajouterTelephone(): void {
    this.nvparent.telephones.push(''); // Ajout d'un numéro de téléphone vide
  }

  supprimerTelephone(index: number): void {
    this.nvparent.telephones.splice(index, 1);
  }

  onSubmit(): void {
    console.log(this.nvparent.telephones);
    // Vous pouvez envoyer les numéros de téléphone à votre backend ici
  }

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);
    }
  }

  ajouterParent() {
    console.log(this.nvparent.telephones);
    if (
      this.nvparent.nomprenom == '' ||
      this.nvparent.email == '' ||
      this.nvparent.idecole == '' ||
      this.nvparent.telephones.length == 0
    ) {
      alert('Veuillez remplir tous les champs svp.');
      return;
    }

    this.nvparent.idecole = this.session._id;

    this.base.creeparent(this.nvparent).subscribe({
      next: (data) => {
        alert('Parent ajouté.');
        this.router.navigate(['/ecole/parent/listparent']);
      },
      error: (err) => console.log('Erreur'),
    });
  }
}
