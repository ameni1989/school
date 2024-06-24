import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(public _base: BaseService) {}
  ramassage: any;
  retour: any;
  arretramassage: any;
  arretretour: any;
  session: any;
  elevesramassage: any;
  elevesretour: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);

      this._base.afficherarretparecole(this.session._id).subscribe({
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

  afficheramassage() {
    // console.log(this.arretramassage)
    // this._base.affichereleveramassage(this.arretramassage)
    // .subscribe({
    //   next:(res)=>{
    //     this.elevesramassage=res
    //     console.log(this.elevesramassage)
    //     },
    //   error:(err)=> {
    //     console.log(err);
    //   },
    //  })
  }
  afficherretour() {
    // console.log(this.arretretour)
    //  this._base.affichereleveretour(this.arretretour)
    // .subscribe({
    //   next:(res)=>{
    //     this.elevesretour=res
    //   },
    //   error:(err)=> {
    //     console.log(err);
    //   },
    //  })
  }
}
