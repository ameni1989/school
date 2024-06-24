import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebarecole',
  templateUrl: './sidebarecole.component.html',
  styleUrls: ['./sidebarecole.component.css']
})
export class SidebarecoleComponent {
  isLiked = false;
 
  toggleIcon() {
    this.isLiked = !this.isLiked;
     // Vous pouvez ajouter votre logique supplémentaire ici
  }
  isLiked2 = false;
 
  toggleIcon2() {
    this.isLiked2 = !this.isLiked2;
     // Vous pouvez ajouter votre logique supplémentaire ici
  }
  isLiked3 = false;
 
  toggleIcon3() {
    this.isLiked3 = !this.isLiked3;
     // Vous pouvez ajouter votre logique supplémentaire ici
  }
}
