import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-listeecole',
  templateUrl: './listeecole.component.html',
  styleUrls: ['./listeecole.component.css']
})
export class ListeecoleComponent {
constructor(private base:BaseService){}
enableMapClick = true; // Utilisez cette variable pour activer/désactiver le gestionnaire d'événements click
  zoom = 15;
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    maxZoom: 25,
    minZoom: 8,
  };
  markerPosition: google.maps.LatLngLiteral | undefined;
ecoles:any

 markers: any[] = [];
 ngOnInit(){
  navigator.geolocation.getCurrentPosition((position) => {
    this.center = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  });
  this.base.afficherecoles()
  .subscribe({
    next: (res) => {
      this.ecoles = res;
      for(let i = 0; i < this.ecoles.length; i++){
        let ecole=this.ecoles[i]
        let marker = {
          position: {lat:Number(ecole.latitude),lng:Number(ecole.longitude)},
          label: { text: ecole.nom, color: 'white', fontWeight: 'bold' },
          options: { icon: { url: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png' } }
        };
      
        this.markers.push(marker);
      }
      
    },
    error: (err) => {
      console.log(err);
    }
  })
 
}

}
