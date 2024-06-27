import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

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
    telephone: '',
    email: '',
    idecole: '',
  };

  // ajouterParent(){
  //   this.base.parents.push(this.nvparent);
  //   this.router.navigate(['/ecole/parent/listparent'])
  //   console.log(this.base.parents)
  // }
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
  ajouterParent() {
    console.log(this.nvparent);

    this.nvparent.idecole = this.session._id;
    console.log('session', this.session._id);

    this.base.creeparent(this.nvparent).subscribe({
      next: (data) => {
        alert('parent ajouté');
        console.log(data);

        // this.router.navigate(['/ecole/parent/listparent']);
      },
      error: (err) => console.log(err),
    });
  }
}
