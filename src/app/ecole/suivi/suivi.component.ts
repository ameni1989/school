import { Component } from '@angular/core';
 
@Component({
  selector: 'app-suivi',
  templateUrl: './suivi.component.html',
  styleUrls: ['./suivi.component.css']
})
export class SuiviComponent {
  selectedBus: string = ''; // Propriété pour stocker la valeur sélectionnée du bus
  selectedarret: string='';

   buses = [
    
    { position: { lat: 35.672535092195847, lng: 10.099550121152326 }, 
      label: {text:'bus1' ,color:'white',fontWeight:'bold' },
      options:{
      icon:{url:'assets/images/bus2.png',
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(50, 50)} } 
    },
    { position: { lat: 35.66991038276349, lng: 10.099990121152326 }, 
    label: {text:'bus2' ,color:'white',fontWeight:'bold' },
    options:{
    icon:{url:'assets/images/bus2.png',
    size: new google.maps.Size(71, 71),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(17, 34),
    scaledSize: new google.maps.Size(50, 50)} } 
  },

    // Ajoutez autant de marqueurs que nécessaire
  ];
    markers = [
    { position:{ lat: 35.66991038276349, lng: 10.101576000452042 }, label: {text:'ecole' ,color:'white',fontWeight:'bold' },options:{icon:{url:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'} } },
    { position: { lat: 35.67072419905777, lng: 10.100795206944232 }, label: {text:'arret 1' ,color:'white',fontWeight:'bold' },options:{icon:{url:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'} } },
    { position: { lat: 35.671535092195846, lng: 10.099550121152324 }, label: {text:'arret 2' ,color:'white',fontWeight:'bold' },options:{icon:{url:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'} } },
    
  


    // Ajoutez autant de marqueurs que nécessaire
  ];
  latitude:any
  longitude:any
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
  polylineOptions = {
    path: [
      { lat: this.markers[0].position.lat, lng: this.markers[0].position.lng },
      { lat: this.markers[1].position.lat, lng: this.markers[1].position.lng },
      { lat: this.markers[2].position.lat, lng: this.markers[2].position.lng },
 

      // Ajoutez autant de points que nécessaire
    ],
    strokeColor: '#ffbc00',
    strokeWeight: 2,
    visible: true,
  };
  
 
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
    if (this.enableMapClick){
      if(event.latLng){
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
 
}
