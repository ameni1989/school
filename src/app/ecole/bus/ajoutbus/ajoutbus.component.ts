import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-ajoutbus',
  templateUrl: './ajoutbus.component.html',
  styleUrls: ['./ajoutbus.component.css']
})
export class AjoutbusComponent {
  constructor(private _base:BaseService, private router:Router){}

  session:any
  ngOnInit(){
    let token=localStorage.getItem('token')
    if(token){
      let data=JSON.parse(window.atob(token.split('.')[1]))    // decoder token
      console.log("data",data)
      this.session=data
      console.log(this.session._id)
    
          }
    
  }
  nvbus= {
    marque: "",
    idecole: "",
    serie: "",
    couleur: "",
    place: "",
    surcharge: ""
    
  };
  marque:any
  serie:any
  couleur:any
  place:any
  surcharge:any

  creebus(){
    this.nvbus.marque=this.marque
    this.nvbus.serie=this.serie
    this.nvbus.couleur=this.couleur
    this.nvbus.place=this.place
    this.nvbus.surcharge=this.surcharge
    this.nvbus.idecole=this.session._id
   
    this._base.creebus(this.nvbus)
    .subscribe({
      next:(data)=>{alert('bus ajouter ');
      this.router.navigate(['/ecole/bus/listbus']);
      } ,
      error : (err)=>console.log("erreur")
    })  
  }
}
