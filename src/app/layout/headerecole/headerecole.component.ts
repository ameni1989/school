import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-headerecole',
  templateUrl: './headerecole.component.html',
  styleUrls: ['./headerecole.component.css']
})
export class HeaderecoleComponent {
  constructor( public _base:BaseService, public router:Router ){}

  session:any
  ngOnInit(){
    let token=localStorage.getItem('token')
    if(token){
      let data=JSON.parse(window.atob(token.split('.')[1]))    // decoder token
      console.log("data",data)
      this.session=data
      }
  }


  logout(){
    localStorage.removeItem('token')
    localStorage.setItem('logout_inc','true')
    
    this.router.navigate(['/login'])
      alert("logout")
  }
}
