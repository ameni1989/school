import { Component } from '@angular/core';
import { BaseService } from 'src/app/base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listarret',
  templateUrl: './listarret.component.html',
  styleUrls: ['./listarret.component.css'],
})
export class ListarretComponent {
  constructor(public _base: BaseService) {}

  paginate: number = 1;
  session: any;
  markers: any[] = [];

  arrets: any;

  //    markers = [
  //    { position:{ lat: 35.66991038276349, lng: 10.101576000452042 }, label: {text:'ecole' ,color:'white',fontWeight:'bold' },options:{icon:{url:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'},title:'ecole' } },
  //    { position: { lat: 35.67072419905777, lng: 10.100795206944232 }, label: {text:'arret 1' ,color:'white',fontWeight:'bold' },options:{icon:{url:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'} ,title:'arret1'} },
  //    { position: { lat: 35.671535092195846, lng: 10.099550121152324 }, label: {text:'arret 2' ,color:'white',fontWeight:'bold' },options:{icon:{url:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'},title:'arret2' } },
  //    { position: { lat: 35.67337673783391, lng: 10.099550121152324 }, label: {text:'arret 3' ,color:'white',fontWeight:'bold' },options:{icon:{url:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'},title:'arret3' } },

  //       // Ajoutez autant de marqueurs que nécessaire
  //  ];
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
  //ligne qui relie les marquers
  //  polylineOptions = {
  //    path: [
  //      { lat: this.markers[0].position.lat, lng: this.markers[0].position.lng },
  //      { lat: this.markers[1].position.lat, lng: this.markers[1].position.lng },
  //      { lat: this.markers[2].position.lat, lng: this.markers[2].position.lng },

  //      // Ajoutez autant de points que nécessaire
  //    ],
  //    strokeColor: '#ffbc00',
  //    strokeWeight: 2,
  //    visible: true,
  //  };

  ngOnInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // décoder le token
      console.log('data', data);
      this.session = data;
      console.log(this.session._id);

      let sessionLat = Number(this.session.latitude);
      let sessionLng = Number(this.session.longitude);

      // Vérifiez si les valeurs sont valides
      if (!isNaN(sessionLat) && !isNaN(sessionLng)) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.center = {
            // lat: position.coords.latitude, // pour centrer selon position gps
            // lng: position.coords.longitude,
            // center selon ecole
            // lat: sessionLat,
            // lng: sessionLng,
            lat: 35.675914,

            lng: 10.091924,
          };
        });

        this._base.afficherarretparecole(this.session._id).subscribe({
          next: (res) => {
            this.arrets = res;
            console.log(this.arrets);
            for (let i = 0; i < this.arrets.length; i++) {
              let arret = this.arrets[i];
              let arretLat = Number(arret.latitude);
              let arretLng = Number(arret.longitude);

              if (!isNaN(arretLat) && !isNaN(arretLng)) {
                let marker = {
                  position: {
                    lat: arretLat,
                    lng: arretLng,
                  },
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
          },
          error: (err) => {
            console.log(err);
          },
        });
      } else {
        console.error('Invalid session coordinates:', this.session);
      }
    }
  }

  zoomIn() {
    this.zoom++;
  }

  zoomOut() {
    this.zoom--;
  }

  circuits: any;
  supprimer(ida: any) {
    console.log(ida);
    this._base.affichercircuitpararret(ida).subscribe({
      next: (res: {}) => {
        this.circuits = res;
        console.log(this.circuits);
        if (this.circuits.length != 0) {
          alert(
            'Vous ne pouvez pas supprimer cet arret car il a appartient a un circuit!'
          );
        } else {
          Swal.fire({
            title: 'Etes vous sûre de vouloir supprimer cet arret ?',
            text: 'veuillez confirmer !',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'oui, supprimer',
          }).then((result) => {
            if (result.isConfirmed) {
              this._base.supprimerarret(ida).subscribe({
                next: (res) => {
                  Swal.fire('supprimé!, arret  supprimé', 'success');
                  console.log(res);
                  this.ngOnInit();
                },
                error: () => {
                  alert('une erreur est survenue');
                },
              });
            }
          });
        }
      },
      error: (e) => console.log(e),
    });
  }
  nvarret: any = {
    nom: '',
    latitude: 0,
    longitude: 0,
  };
  idamodifier: any;
  modifmarker: any;

  arretadmodifier(id: any) {
    this.idamodifier = id;
    this._base.arretparid(this.idamodifier).subscribe({
      next: (res) => {
        this.nvarret = res;
        console.log(this.nvarret);
        this.center = {
          // center selon arret
          lat: Number(this.nvarret.latitude),
          lng: Number(this.nvarret.longitude),
        };
        this.modifmarker = {
          position: {
            lat: Number(this.nvarret.latitude),
            lng: Number(this.nvarret.longitude),
          },
          label: {
            text: this.nvarret.nom,
            color: 'white',
            fontWeight: 'bold',
          },
          options: {
            icon: {
              url: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
            },
          },
        };
      },
    });
  }

  click(event: google.maps.MapMouseEvent) {
    if (this.enableMapClick) {
      if (event.latLng) {
        // console.log('Coordonnées du clic :', event.latLng.toJSON());
        const coordinatesObject = event.latLng.toJSON();

        // this.latitude = coordinatesObject.lat;
        // this.longitude = coordinatesObject.lng;
        // this.modifmarker = {
        //   lat: coordinatesObject.lat,
        //   lng: coordinatesObject.lng,
        // };
        this.modifmarker = {
          position: {
            lat: Number(coordinatesObject.lat),
            lng: Number(coordinatesObject.lng),
          },
          label: {
            text: this.nvarret.nom,
            color: 'white',
            fontWeight: 'bold',
          },
          options: {
            icon: {
              url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            },
          },
        };
        this.nvarret.latitude = coordinatesObject.lat;
        this.nvarret.longitude = coordinatesObject.lng;
        // console.log(this.nvmodifmarker);
      }
    }
  }

  modifierarret() {
    this._base
      .modifierarret(this.idamodifier, this.nvarret)

      .subscribe({
        next: (res) => {
          alert(this.nvarret.nom + '  modifié avec succes');
          this.ngOnInit();
          location.reload();
        },
        error: (err) => {
          console.log('erreur');
        },
      });
  }
}
