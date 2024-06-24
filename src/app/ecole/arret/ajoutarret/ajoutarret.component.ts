import { Component } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { BaseService } from 'src/app/base.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajoutarret',
  templateUrl: './ajoutarret.component.html',
  styleUrls: ['./ajoutarret.component.css'],
})
export class AjoutarretComponent {
  constructor(
    private http: HttpClient,
    private _base: BaseService,
    private router: Router
  ) {}
  markers: any[] = [];

  cityName: string = '';

  // latitude = 0;
  // longitude = 0;
  latitude = 35.675914;
  longitude = 10.091924;

  nomarret: any;
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
  session: any;
  arrets: any;
  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // décoder le token
      this.session = data;
      console.log(this.session._id);
      console.log(this.session.latitude, this.session.longitude);

      if (this.session._id) {
        this._base.afficherarretparecole(this.session._id).subscribe({
          next: (res) => {
            this.arrets = res;
            console.log(this.arrets);
            for (let i = 0; i < this.arrets.length; i++) {
              let arret = this.arrets[i];
              let lat = Number(arret.latitude);
              let lng = Number(arret.longitude);

              if (!isNaN(lat) && !isNaN(lng)) {
                let marker = {
                  position: { lat, lng },
                  label: {
                    text: arret.nom,
                    color: 'white',
                    fontWeight: 'bold',
                  },
                  options: {
                    icon: {
                      url: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                    },
                  },
                };

                this.markers.push(marker);
              } else {
                console.error('Invalid coordinates for marker:', arret);
              }
            }

            let sessionLat = Number(this.session.latitude);
            let sessionLng = Number(this.session.longitude);

            if (!isNaN(sessionLat) && !isNaN(sessionLng)) {
              this.center = {
                // lat: sessionLat,
                // lng: sessionLng,
                lat: 35.675914, // Coordonnées de Kairouan
                lng: 10.091924,
              };

              this.markers.push({
                position: {
                  lat: sessionLat,
                  lng: sessionLng,
                },
                label: {
                  color: 'white',
                  fontWeight: 'bold',
                  text: this.session.nom,
                },
                title: this.session.nom,
                options: {
                  animation: google.maps.Animation.BOUNCE,
                  icon: {
                    url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
                  },
                },
              });
            } else {
              console.error('Invalid session coordinates:', this.session);
            }
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    }
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

  geocodeCity(event: Event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)
    console.log(this.cityName);
    if (this.cityName) {
      this.http
        .get<any>(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${this.cityName}&key=AIzaSyCcPUWO5ZpvcTVWoJAUq6qUDnS4JJNrpfc`
        )
        .subscribe((data) => {
          console.log("Réponse de l'API de géocodage :", data);

          if (data.results && data.results.length > 0) {
            const location = data.results[0].geometry.location;
            this.center = {
              lat: location.lat,
              lng: location.lng,
            };
            this.markerPosition = {
              lat: location.lat,
              lng: location.lng,
            };
          } else {
            console.error('Géocodage impossible pour la ville spécifiée.');
          }
        });
    }
  }

  nvarret = {
    nom: '',
    idecole: '',
    latitude: 0,
    longitude: 0,
  };
  creearret() {
    this.nvarret.nom = this.nomarret;
    this.nvarret.latitude = this.latitude;
    this.nvarret.longitude = this.longitude;
    this.nvarret.idecole = this.session._id;

    this._base.creearret(this.nvarret).subscribe({
      next: (data) => {
        alert('arret ajouter ');
        console.log(data);

        this.router.navigate(['/ecole/arret/listarret']);
      },
      error: (err) => console.log(err),
    });
  }
}
