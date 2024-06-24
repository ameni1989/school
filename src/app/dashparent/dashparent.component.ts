import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-dashparent',
  templateUrl: './dashparent.component.html',
  styleUrls: ['./dashparent.component.css'],
})
export class DashparentComponent {
  constructor(public _base: BaseService) {}

  data1: any;
  tel: any;
  login() {
    console.log(this.tel);

    this._base.login_m_p(this.tel).subscribe({
      next: (res) => {
        this.data1 = res;
        console.log(this.data1);
      },
      error: (err) => {
        console.log('erreur');
      },
    });
  }
  ecole: any;
  parent: any;
  parents() {
 
    this._base.parent_m_e(this.ecole).subscribe({
      next: (res) => {
        this.parent = res;
        console.log(this.parent);
      },
      error: (err) => {
        console.log('erreur');
      },
    });
  }
}
