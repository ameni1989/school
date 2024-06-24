import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EcoleComponent } from './ecole/ecole.component';
import { HeaderentrepriseComponent } from './layout/headerentreprise/headerentreprise.component';
import { HeaderecoleComponent } from './layout/headerecole/headerecole.component';
import { SidebarentrepriseComponent } from './layout/sidebarentreprise/sidebarentreprise.component';
import { SidebarecoleComponent } from './layout/sidebarecole/sidebarecole.component';
import { FooterentrepriseComponent } from './layout/footerentreprise/footerentreprise.component';
import { FooterecoleComponent } from './layout/footerecole/footerecole.component';
import { ListeecoleComponent } from './entreprise/listeecole/listeecole.component';
import { AjoutecoleComponent } from './entreprise/ajoutecole/ajoutecole.component';
import { FormsModule } from '@angular/forms';
import { ListeversionComponent } from './entreprise/listeversion/listeversion.component';
import { AjoutversionComponent } from './entreprise/ajoutversion/ajoutversion.component';
import { SuiviComponent } from './ecole/suivi/suivi.component';
import { DashboardComponent } from './ecole/dashboard/dashboard.component';
import { ArretComponent } from './ecole/arret/arret.component';
import { CircuitComponent } from './ecole/circuit/circuit.component';
import { ParentComponent } from './ecole/parent/parent.component';
import { EleveComponent } from './ecole/eleve/eleve.component';
import { AgentComponent } from './ecole/agent/agent.component';
import { BusComponent } from './ecole/bus/bus.component';
import { HistoriqueComponent } from './ecole/historique/historique.component';
import { ListeparentComponent } from './ecole/parent/listeparent/listeparent.component';
import { AjoutparentComponent } from './ecole/parent/ajoutparent/ajoutparent.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListagentComponent } from './ecole/agent/listagent/listagent.component';
import { AjoutagentComponent } from './ecole/agent/ajoutagent/ajoutagent.component';
import { ListarretComponent } from './ecole/arret/listarret/listarret.component';
import { AjoutarretComponent } from './ecole/arret/ajoutarret/ajoutarret.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { ListbusComponent } from './ecole/bus/listbus/listbus.component';
import { AjoutbusComponent } from './ecole/bus/ajoutbus/ajoutbus.component';
import { ListeleveComponent } from './ecole/eleve/listeleve/listeleve.component';
import { AjouteleveComponent } from './ecole/eleve/ajouteleve/ajouteleve.component';
import { ListcircuitComponent } from './ecole/circuit/listcircuit/listcircuit.component';
import { AjoutcircuitComponent } from './ecole/circuit/ajoutcircuit/ajoutcircuit.component';
import { TempscircuitComponent } from './ecole/circuit/tempscircuit/tempscircuit.component';
import { AjoutertempscircuitComponent } from './ecole/circuit/ajoutertempscircuit/ajoutertempscircuit.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import {
  MatDatetimepickerModule,
  MatNativeDatetimeModule,
} from '@mat-datetimepicker/core';
import { MatMomentDatetimeModule } from '@mat-datetimepicker/moment';
import { PipePipe } from './pipe.pipe';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashagentComponent } from './dashagent/dashagent.component';
import { ListComponent } from './dashagent/list/list.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DashparentComponent } from './dashparent/dashparent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EntrepriseComponent,
    EcoleComponent,
    HeaderentrepriseComponent,
    HeaderecoleComponent,
    SidebarentrepriseComponent,
    SidebarecoleComponent,
    FooterentrepriseComponent,
    FooterecoleComponent,
    ListeecoleComponent,
    AjoutecoleComponent,
    ListeversionComponent,
    AjoutversionComponent,
    SuiviComponent,
    DashboardComponent,
    ArretComponent,
    CircuitComponent,
    ParentComponent,
    EleveComponent,
    AgentComponent,
    BusComponent,
    HistoriqueComponent,
    ListeparentComponent,
    AjoutparentComponent,
    ListagentComponent,
    AjoutagentComponent,
    ListarretComponent,
    AjoutarretComponent,
    ListbusComponent,
    AjoutbusComponent,
    ListeleveComponent,
    AjouteleveComponent,
    ListcircuitComponent,
    AjoutcircuitComponent,
    TempscircuitComponent,
    AjoutertempscircuitComponent,
    PipePipe,
    DashagentComponent,
    ListComponent,
    DashparentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    BrowserModule,
    GoogleMapsModule,
    HttpClientModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatDatetimepickerModule,
    MatNativeDatetimeModule,
    MatMomentDatetimeModule,
    MatListModule,
    DragDropModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
