import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../base.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(public _base:BaseService  , public router:Router){}
// email:any
// login(){

// if (this.email == 'ecole') {
//   this.router.navigate(['/ecole']);
// } else if (this.email == 'entreprise') {
//   this.router.navigate(['/entreprise']);
// }
 
// }
 session:any
  user={
    email:'',
    password:''
   }
   data1:any
   login(){
    if(this.user.email==""||this.user.password==""){
      alert('champs vide')
      }
      else{

        this._base.login(this.user)
        .subscribe({
          next:(res)=>{
            this.data1=res
            console.log(this.data1)
            if(this.data1.token){
              alert("conecte") 
              localStorage.setItem('token',this.data1.token)   // enregistre token dans local
              
                let data=JSON.parse(window.atob(this.data1.token.split('.')[1]))    // decoder token
                 
            
                if(data){
                  this.router.navigate(['/ecole']) 
                }
               
            }
          else{
            alert(this.data1.message)
          }
          },
          error:(err)=>{console.log("erreur")}
        })

      }
   }
 
}
