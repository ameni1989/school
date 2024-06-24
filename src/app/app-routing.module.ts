import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { LoginComponent } from './login/login.component';
import { ListeecoleComponent } from './entreprise/listeecole/listeecole.component';
import { AjoutecoleComponent } from './entreprise/ajoutecole/ajoutecole.component';
import { AjoutversionComponent } from './entreprise/ajoutversion/ajoutversion.component';
import { ListeversionComponent } from './entreprise/listeversion/listeversion.component';
import { EcoleComponent } from './ecole/ecole.component';
import { SuiviComponent } from './ecole/suivi/suivi.component';
import { DashboardComponent } from './ecole/dashboard/dashboard.component';
import { HistoriqueComponent } from './ecole/historique/historique.component';
import { ArretComponent } from './ecole/arret/arret.component';
import { CircuitComponent } from './ecole/circuit/circuit.component';
import { ParentComponent } from './ecole/parent/parent.component';
import { EleveComponent } from './ecole/eleve/eleve.component';
import { AgentComponent } from './ecole/agent/agent.component';
import { BusComponent } from './ecole/bus/bus.component';
import { ListeparentComponent } from './ecole/parent/listeparent/listeparent.component';
import { AjoutparentComponent } from './ecole/parent/ajoutparent/ajoutparent.component';
import { ListagentComponent } from './ecole/agent/listagent/listagent.component';
import { AjoutagentComponent } from './ecole/agent/ajoutagent/ajoutagent.component';
import { ListarretComponent } from './ecole/arret/listarret/listarret.component';
import { AjoutarretComponent } from './ecole/arret/ajoutarret/ajoutarret.component';
import { ListbusComponent } from './ecole/bus/listbus/listbus.component';
import { AjoutbusComponent } from './ecole/bus/ajoutbus/ajoutbus.component';
import { ListeleveComponent } from './ecole/eleve/listeleve/listeleve.component';
import { AjouteleveComponent } from './ecole/eleve/ajouteleve/ajouteleve.component';
import { ListcircuitComponent } from './ecole/circuit/listcircuit/listcircuit.component';
import { AjoutcircuitComponent } from './ecole/circuit/ajoutcircuit/ajoutcircuit.component';
import { TempscircuitComponent } from './ecole/circuit/tempscircuit/tempscircuit.component';
import { AjoutertempscircuitComponent } from './ecole/circuit/ajoutertempscircuit/ajoutertempscircuit.component';
import { DashagentComponent } from './dashagent/dashagent.component';
import { ListComponent } from './dashagent/list/list.component';
import { DashparentComponent } from './dashparent/dashparent.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'entreprise',
    component: EntrepriseComponent,
    children: [
      { path: 'listeecole', component: ListeecoleComponent },
      { path: 'ajoutecole', component: AjoutecoleComponent },
      { path: 'ajoutversion', component: AjoutversionComponent },
      { path: 'listeversion', component: ListeversionComponent },
    ],
  },
  {
    path: 'ecole',
    component: EcoleComponent,
    children: [
      { path: 'suivi', component: SuiviComponent },
      { path: 'dash', component: DashboardComponent },
      { path: 'historique', component: HistoriqueComponent },
      {
        path: 'arret',
        component: ArretComponent,
        children: [
          { path: 'listarret', component: ListarretComponent },
          { path: 'ajoutarret', component: AjoutarretComponent },
        ],
      },
      {
        path: 'circuit',
        component: CircuitComponent,
        children: [
          { path: 'listcircuit', component: ListcircuitComponent },
          { path: 'ajoutcircuit', component: AjoutcircuitComponent },
          { path: 'tempscircuit', component: TempscircuitComponent },
          {
            path: 'ajoutertempscircuit',
            component: AjoutertempscircuitComponent,
          },
        ],
      },
      {
        path: 'parent',
        component: ParentComponent,
        children: [
          { path: 'listparent', component: ListeparentComponent },
          { path: 'ajoutparent', component: AjoutparentComponent },
        ],
      },
      {
        path: 'eleve',
        component: EleveComponent,
        children: [
          { path: 'listeleve', component: ListeleveComponent },
          { path: 'ajouteleve', component: AjouteleveComponent },
        ],
      },
      {
        path: 'agent',
        component: AgentComponent,
        children: [
          { path: 'listagent', component: ListagentComponent },
          { path: 'ajoutagent', component: AjoutagentComponent },
        ],
      },
      {
        path: 'bus',
        component: BusComponent,
        children: [
          { path: 'listbus', component: ListbusComponent },
          { path: 'ajoutbus', component: AjoutbusComponent },
        ],
      },
    ],
  },
  {
    path: 'dashagent',
    component: DashagentComponent,
    children: [{ path: 'list', component: ListComponent }],
  },
  {
    path: 'dashparent',
    component: DashparentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
