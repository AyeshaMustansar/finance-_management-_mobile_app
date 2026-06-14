import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { arrowDownOutline, arrowUpOutline, basketOutline, carOutline, cashOutline, chevronBackOutline, fastFoodOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-transactionincome',
  templateUrl: './transactionincome.page.html',
  styleUrls: ['./transactionincome.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TransactionincomePage implements OnInit {

  constructor(  private router: Router) { 
    addIcons({
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      searchOutline,
      homeOutline,
      notificationsOutline,
      chevronBackOutline,
      fastFoodOutline,
      carOutline,
      basketOutline,
      cashOutline,
      arrowUpOutline,
      arrowDownOutline,

    })
   }

  ngOnInit() {
  }

  
goTotransaction() {
  this.router.navigate(['/transaction']);
}

goTotransitionincomee() {
  this.router.navigate(['/transitionincomee']);
}



goTotrnasitionexpense() {
  this.router.navigate(['/trnasitionexpense']);
}

goTodaily() {
  this.router.navigate(['/daily']);
}

goTobottomnavigation() {
  this.router.navigate(['/bottomnavigation']);
}


   goTocategories(){
    this.router.navigate(['/categories']);
   }
   
   goToprofile(){
    this.router.navigate(['/profile']);
   }

}
