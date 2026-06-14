import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  notificationsOutline,
  arrowUpOutline,
  arrowDownOutline,
  cashOutline,
  ellipsisHorizontalOutline,
  homeOutline,
  searchOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-transitionincomee',
  templateUrl: './transitionincomee.page.html',
  styleUrls: ['./transitionincomee.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TransitionincomeePage implements OnInit {

  constructor(    private router: Router ) {
    addIcons({
      chevronBackOutline,
      notificationsOutline,
      arrowUpOutline,
      arrowDownOutline,
      cashOutline,
      ellipsisHorizontalOutline,
      homeOutline,
      searchOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline
    });
  }

 
 
 
  ngOnInit() {}






  
goTodaily() {
  this.router.navigate(['/daily']);
}

goTobottomnavigation() {
  this.router.navigate(['/bottomnavigation']);
}

goTotransactionincome() {
  this.router.navigate(['/transactionincome']);
}

goTotrnasitionexpense() {
  this.router.navigate(['/trnasitionexpense']);
}

   goTocategories(){
    this.router.navigate(['/categories']);
   }


   goToprofile(){
    this.router.navigate(['/profile']);
   }
}
