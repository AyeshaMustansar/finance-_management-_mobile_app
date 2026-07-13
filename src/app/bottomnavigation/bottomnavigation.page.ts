import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { barChartOutline, basketOutline, cardOutline, carOutline, cashOutline, checkboxOutline, homeOutline, layersOutline, notificationsOutline, personOutline, restaurantOutline, searchOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-bottomnavigation',
  templateUrl: './bottomnavigation.page.html',
  styleUrls: ['./bottomnavigation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BottomnavigationPage implements OnInit {

  constructor(      private router: Router      ) {
    addIcons({
      checkboxOutline,
      cashOutline,
      cardOutline,
      walletOutline,
      notificationsOutline,
      carOutline,
      restaurantOutline,
      homeOutline,
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      barChartOutline,
      basketOutline,
      searchOutline,
    })
   }

  ngOnInit() {
  }


  goTodaily() {
    this.router.navigate(['/daily']);
  }


    goTomonthly() {
    this.router.navigate(['/monthly']);
  }


    goToweekly() {
    this.router.navigate(['/weekly']);
  }



   goTotransaction(){
    this.router.navigate(['/transaction']);
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
