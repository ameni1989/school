import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}
  chercher: any;
  urlecole = 'https://ebus-1.onrender.com/ecole/';
  afficherecoles() {
    return this.http.get(this.urlecole + 'afficher');
  }
  creeecole(e: any) {
    return this.http.post(this.urlecole + 'creer', e);
  }
  login(user: any) {
    return this.http.post(this.urlecole + 'login', user);
  }
  urlparent = 'https://ebus-1.onrender.com/parent/';
  creeparent(p: any) {
    return this.http.post(this.urlparent + 'creer', p);
  }
  afficherparecole(i: any) {
    return this.http.get(this.urlparent + 'afficherparecole/' + i);
  }
  afficher() {
    return this.http.get(this.urlparent + 'afficher');
  }
  supprimerparent(id: any) {
    return this.http.delete(this.urlparent + 'supprimerparent/' + id);
  }
  parentparid(id: any) {
    return this.http.get(this.urlparent + 'parentparid/' + id);
  }
  modifierparent(id: any, b: any) {
    return this.http.put(this.urlparent + 'modifierparent/' + id, b);
  }

  urlarret = 'https://ebus-1.onrender.com/arret/';
  creearret(a: any) {
    return this.http.post(this.urlarret + 'creer', a);
  }
  afficherarretparecole(i: any) {
    return this.http.get(this.urlarret + 'afficherparecole/' + i);
  }
  arretparid(i: any) {
    return this.http.get(this.urlarret + 'arretparid/' + i);
  }
  supprimerarret(id: any) {
    return this.http.delete(this.urlarret + 'supprimerarret/' + id);
  }

  modifierarret(id: any, a: any) {
    return this.http.put(this.urlarret + 'modifierarret/' + id, a);
  }
  urlcircuit = 'https://ebus-1.onrender.com/circuit/';
  creecircuit(c: any) {
    return this.http.post(this.urlcircuit + 'creer', c);
  }
  affichercircuitparecole(i: any) {
    return this.http.get(this.urlcircuit + 'afficherparecole/' + i);
  }
  supprimercircuit(id: any) {
    return this.http.delete(this.urlcircuit + 'supprimer/' + id);
  }
  affichercircuitparagent(i: any) {
    return this.http.get(this.urlcircuit + 'affichercircuitparagent/' + i);
  }
  affichercircuitparbus(i: any) {
    return this.http.get(this.urlcircuit + 'affichercircuitparbus/' + i);
  }
  affichercircuitpararret(i: any) {
    return this.http.get(this.urlcircuit + 'affichercircuitpararret/' + i);
  }
  circuitparid(id: any) {
    return this.http.get(this.urlcircuit + 'circuitparid/' + id);
  }
  modifiercircuit(id: any, c: any) {
    return this.http.put(this.urlcircuit + 'modifiercircuit/' + id, c);
  }

  urlinstance = 'https://ebus-1.onrender.com/instancecircuit/';
  creerinstance(inst: any) {
    return this.http.post(this.urlinstance + 'creerinstance', inst);
  }
  // instancepartempsetagent(data: any) {
  //   return this.http.get(this.urlinstance + 'instancepartempsetagent', data);
  // }
  instancepartempsetagent(
    date: any,
    heure: any,
    idagent: any
  ): Observable<any> {
    // Construct the URL with parameters
    const urlWithParams = `${this.urlinstance}instancepartempsetagent?date=${date}&heure=${heure}&idagent=${idagent}`;

    // Send the GET request
    return this.http.get(urlWithParams);
  }

  ramasseouretour(id: any, e: any) {
    return this.http.put(this.urlinstance + 'ramasseouretour/' + id, e);
  }
  absenteleveouparent(id: any, e: any) {
    return this.http.put(this.urlinstance + 'absenteleveouparent/' + id, e);
  }

  urlbus = 'https://ebus-1.onrender.com/bus/';
  creebus(b: any) {
    return this.http.post(this.urlbus + 'creer', b);
  }
  afficherbusparecole(i: any) {
    return this.http.get(this.urlbus + 'afficherparecole/' + i);
  }
  supprimerbus(id: any) {
    return this.http.delete(this.urlbus + 'supprimerbus/' + id);
  }
  busparid(id: any) {
    return this.http.get(this.urlbus + 'busparid/' + id);
  }
  modifierbus(id: any, b: any) {
    return this.http.put(this.urlbus + 'modifierbus/' + id, b);
  }

  urleleve = 'https://ebus-1.onrender.com/eleve/';
  creeeleve(e: any) {
    return this.http.post(this.urleleve + 'creer', e);
  }
  affichereleveparecole(i: any) {
    return this.http.get(this.urleleve + 'afficherparecole/' + i);
  }
  afficherparparent(i: any) {
    return this.http.get(this.urleleve + 'afficherparparent/' + i);
  }
  affichereleveramassage(i: any, h: any) {
    return this.http.get(this.urleleve + 'afficherparramassage/' + i + '/' + h);
  }

  affichereleveretour(i: any, h: any) {
    return this.http.get(this.urleleve + 'afficherparretour/' + i + '/' + h);
  }

  supprimereleve(id: any) {
    return this.http.delete(this.urleleve + 'supprimer/' + id);
  }
  eleveparid(id: any) {
    return this.http.get(this.urleleve + 'eleveparid/' + id);
  }
  modifiereleve(id: any, e: any) {
    return this.http.put(this.urleleve + 'modifiereleve/' + id, e);
  }

  urlagent = 'https://ebus-1.onrender.com/agent/';
  creeagent(a: any) {
    return this.http.post(this.urlagent + 'creer', a);
  }
  afficheragentparecole(i: any) {
    return this.http.get(this.urlagent + 'afficherparecole/' + i);
  }
  afficheragentid(id: any) {
    return this.http.get(this.urlagent + 'afficherparid/' + id);
  }
  supprimeragent(id: any) {
    return this.http.delete(this.urlagent + 'supprimeragent/' + id);
  }
  agentparid(id: any) {
    return this.http.get(this.urlagent + 'agentparid/' + id);
  }
  modifieragent(id: any, a: any) {
    return this.http.put(this.urlagent + 'modifieragent/' + id, a);
  }

  urlmobileparent = 'https://ebus-1.onrender.com/parent_m/';

  login_m_p(tel: any) {
    return this.http.post(this.urlmobileparent + 'login', tel);
  }

  parent_m_e(i: any) {
    return this.http.get(this.urlmobileparent + 'afficherparecole/' + i);
  }
}
