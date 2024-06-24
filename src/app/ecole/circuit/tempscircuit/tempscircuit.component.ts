import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions, EventInput } from '@fullcalendar/core'; // useful for typechecking
import { Calendar } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import frLocale from '@fullcalendar/core/locales/fr';
import { BaseService } from 'src/app/base.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tempscircuit',
  templateUrl: './tempscircuit.component.html',
  styleUrls: ['./tempscircuit.component.css'],
})
export class TempscircuitComponent {
  @ViewChildren('externalEvent') externalEvents:
    | QueryList<ElementRef>
    | undefined;
  constructor(public _base: BaseService) {}
  session: any;
  circuitsbase: any;
  circuits: any[] = []; // Change the type to match your data structure

  // circuits = [
  //   { id: 1, name: 'Circuit 1' },
  //   { id: 2, name: 'Circuit 2' },
  //   { id: 3, name: 'Circuit 3' },
  //   // Add more circuits as needed
  // ];
  [x: string]: any;
  title: any;
  debut: any;
  fin: any;
  // events: any[] = []; // Liste des événements
  events: EventInput[] = [];

  selectedEvent: EventInput | null = null; // Variable to hold the selected event

  selectedDate: any;
  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    hiddenDays: [0],

    locale: frLocale,
    dateClick: this['handleDateClick'].bind(this), // MUST ensure `this` context is maintained

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek',
    },
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    editable: true,
    droppable: true,
    businessHours: {
      // Plage horaire de 7h à 19h du lundi au samedi
      daysOfWeek: [1, 2, 3, 4, 5, 6], // Du lundi au samedi
      startTime: '07:00',
      endTime: '19:00',
    },
    slotMinTime: '07:00', // Heure de début de la première ligne d'heure
    slotMaxTime: '19:00', // Heure de fin de la dernière ligne d'heure
    events: this.events, // Utilisez une liste pour stocker les événements
    eventReceive: this['handleEventReceive'].bind(this), // Handle event drop
    eventColor: '#ffbc00',
    displayEventTime: false,
    eventClick: this.handleEventClick.bind(this),
  };
  handleDateClick(arg: { dateStr: string }) {
    console.log('date click! ' + arg.dateStr);
  }

  handleEventClick(info: any) {
    // if (this.selectedEvent && this.selectedEvent.id === info.event.id) {
    //   // Si le même événement est cliqué à nouveau, réinitialise selectedEvent
    //   this.selectedEvent = null;
    // } else {
    //   // Sinon, attribuez l'événement cliqué à selectedEvent
    //   this.selectedEvent = info.event.toPlainObject();
    // }
    this.selectedEvent = info.event.toPlainObject();
    // alert(this.selectedEvent?.title);
    console.log(this.selectedEvent);
    Swal.fire({
      title: 'vous etes sure de demarrer voyage',
      text: 'veuillez confirmer !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'oui, demarrer',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.selectedEvent) {
          if (this.selectedEvent.extendedProps) {
            console.log(this.selectedEvent.extendedProps['idcircuit']);
            const idCircuit = this.selectedEvent.extendedProps['idcircuit'];
            // console.log(this.selectedEvent.start);
            const dateString = String(this.selectedEvent.start);
            const dateObject = new Date(dateString);

            // Extraire l'année, le mois et le jour
            const year = dateObject.getFullYear();
            const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0, donc ajouter 1 et formater à deux chiffres
            const day = String(dateObject.getDate()).padStart(2, '0'); // Formater à deux chiffres

            const date = day + '/' + month + '/' + year;
            console.log(date);
            let instancecircuit = {
              date: date,
              idcircuit: idCircuit,
            };
            this._base.creerinstance(instancecircuit).subscribe({
              next: (data) => {
                Swal.fire('voyage demarré avec success');
              },
              error: (err) => console.log('erreur'),
            });
          }
        }
      }
    });
  }

  handleEventReceive(info: any) {
    const event = {
      id: new Date().toISOString(), // Generate a unique ID

      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
    };
    this.events.push(event);
    this.calendarOptions.events = this.events.slice();
  }
  formatHour(hour: any) {
    // Ensure the hour is a two-digit string
    const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
    // Return the formatted hour with ':00:00'
    return `${formattedHour}:00:00`;
  }

  ngAfterViewInit() {
    let token = localStorage.getItem('token');
    if (token) {
      let data = JSON.parse(window.atob(token.split('.')[1])); // decoder token
      this.session = data;
    }
    this._base.affichercircuitparecole(this.session._id).subscribe({
      next: (res) => {
        this.circuitsbase = res;
        console.log(this.circuitsbase);
        for (let i = 0; i < this.circuitsbase.length; i++) {
          console.log(this.circuitsbase[i].nom);
          let startHourValue = Number(this.circuitsbase[i].heure);
          let formattedStartHour = this.formatHour(startHourValue);

          // Calculate end hour by adding 1 to the start hour
          let endHourValue = startHourValue + 1;
          let formattedEndHour = this.formatHour(endHourValue);
          console.log(formattedStartHour + ' / ' + formattedEndHour);
          let titre = this.circuitsbase[i].nom;
          let idcircuit = this.circuitsbase[i]._id;

          let heure1 = formattedStartHour;

          let heure2 = formattedEndHour;

          for (let j = 0; j < 272; j++) {
            let currentDate = new Date('2023-09-18');
            currentDate.setDate(currentDate.getDate() + j);
            let dateString = currentDate.toISOString().split('T')[0];
            // console.log(dateString);
            this.events.push({
              title: titre,
              idcircuit: idcircuit,
              start: `${dateString}T${heure1}`,
              end: `${dateString}T${heure2}`,
            });

            this.calendarOptions.events = this.events.slice();
          }
        }
      },
      error: (err) => {
        console.log(err);
      },
    });

    // this.circuits.forEach(circuit => {

    //   if(this.externalEvents){
    //     const externalEvent = this.externalEvents.toArray()[circuit.id - 1].nativeElement;
    //     new Draggable(externalEvent, {
    //       itemSelector: '.external-event',
    //       eventData: function (eventEl: any) {
    //         return {
    //           title: eventEl.innerText.trim(),
    //         };
    //       },
    //     });
    //   }

    // });
  }

  addEvent() {
    this.events.push({
      title: this.title,
      start: this.debut,
      end: this.fin,
    });

    // Mettez à jour la liste des événements dans les options du calendrier
    this.calendarOptions.events = this.events.slice();
  }

  removeSelectedEvent() {
    if (this.selectedEvent) {
      const indexToRemove = this.events.findIndex(
        (event) => event.id === this.selectedEvent?.id
      );
      if (indexToRemove !== -1) {
        this.events.splice(indexToRemove, 1);
        this.calendarOptions.events = this.events.slice();
        this.selectedEvent = null; // Clear the selected event after removal
      }
    }
  }

  // dupliquer les evenements d'une semaine

  duplicateEventsForAllWeeks() {}
}
