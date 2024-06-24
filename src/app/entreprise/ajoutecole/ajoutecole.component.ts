import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from 'src/app/base.service';

@Component({
  selector: 'app-ajoutecole',
  templateUrl: './ajoutecole.component.html',
  styleUrls: ['./ajoutecole.component.css'],
})
export class AjoutecoleComponent {
  constructor(private base: BaseService, public router: Router) {}

  latitude: any;
  longitude: any;
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

  ecole = {
    nom: '',
    email: '',
    password: '',
    telephone1: '',
    telephone2: '',
    adresse: '',
    latitude: '',
    longitude: '',
  };
  logo: any;
  selectimage(i: any) {
    this.logo = i.target.files[0];
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    this.markerPosition = {
      lat: this.center.lat,
      lng: this.center.lng,
    };
  }
  zoomIn() {
    this.zoom++;
  }

  zoomOut() {
    this.zoom--;
  }
  click(event: google.maps.MapMouseEvent) {
    if (this.enableMapClick) {
      if (event.latLng) {
        console.log('Coordonnées du clic :', event.latLng.toJSON());
        const coordinatesObject = event.latLng.toJSON();

        this.latitude = coordinatesObject.lat;
        this.longitude = coordinatesObject.lng;
        this.markerPosition = {
          lat: coordinatesObject.lat,
          lng: coordinatesObject.lng,
        };
      }
    }
  }
  message: any;
  creerecole() {
    this.ecole.latitude = this.latitude;
    this.ecole.longitude = this.longitude;
    let data = new FormData();
    data.append('nom', this.ecole.nom);
    data.append('email', this.ecole.email);
    data.append('password', this.ecole.password);
    data.append('telephone1', this.ecole.telephone2);
    data.append('telephone2', this.ecole.telephone2);
    data.append('adresse', this.ecole.adresse);
    data.append('logo', this.logo);
    data.append('latitude', this.ecole.latitude);
    data.append('longitude', this.ecole.longitude);

    this.base.creeecole(data).subscribe({
      next: (data) => {
        alert('ecole ajouter ');
        this.router.navigate(['/listeecole']);
      },
      error: (err) => {
        console.log(err);
        if (err.error.message) {
          this.message = err.error.message;
        }
      },
    });
  }
}
