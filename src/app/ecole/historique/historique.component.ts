import { Component } from '@angular/core';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent {
  isLiked = false;
 
  toggleIcon() {
    this.isLiked = !this.isLiked;
     // Vous pouvez ajouter votre logique supplémentaire ici
  }
}
