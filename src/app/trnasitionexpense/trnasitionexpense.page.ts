import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router'; 
import { addIcons } from 'ionicons';
import { arrowDownOutline, arrowUpOutline, cashOutline, chevronBackOutline, ellipsisHorizontalOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-trnasitionexpense',
  templateUrl: './trnasitionexpense.page.html',
  styleUrls: ['./trnasitionexpense.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TrnasitionexpensePage implements OnInit {

  constructor(   private router: Router ) { 
    addIcons({
      homeOutline,
      swapHorizontalOutline,
      personOutline,
      layersOutline,
      chevronBackOutline,
      notificationsOutline,
      arrowUpOutline,
      arrowDownOutline,
      cashOutline,
      ellipsisHorizontalOutline,
      searchOutline,
    })
  }

  ngOnInit() {
  }

   
goTodaily() {
  this.router.navigate(['/daily']);
}

goTobottomnavigation() {
  this.router.navigate(['/bottomnavigation']);
}

goTotransactionincome() {
  this.router.navigate(['/transactionincome']);
}

goTotransitionincomee() {
  this.router.navigate(['/transitionincomee']);
}


   goTocategories(){
    this.router.navigate(['/categories']);
   }

   goToprofile(){
    this.router.navigate(['/profile']);
   }
   goTonotification(){
    this.router.navigate(['/notification']);
   }
}
