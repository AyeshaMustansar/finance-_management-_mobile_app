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
  checkboxOutline,
  restaurantOutline,
  busOutline,
  medkitOutline,
  basketOutline,

  giftOutline,
  walletOutline,
  ticketOutline,
  addOutline,
  homeOutline,
  searchOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CategoriesPage implements OnInit {

  constructor(  private router: Router) {
    addIcons({
      chevronBackOutline,
      notificationsOutline,
      arrowUpOutline,
      arrowDownOutline,
      checkboxOutline,
      restaurantOutline,
      busOutline,
      medkitOutline,
      basketOutline,
      homeOutline,
      giftOutline,
      walletOutline,
      ticketOutline,
      addOutline,
      searchOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline
    });
  }

  ngOnInit() {}


     goTofood(){
    this.router.navigate(['/food']);
   }

        goTotransport(){
    this.router.navigate(['/transport']);
   }

           goTomedicine(){
    this.router.navigate(['/medicine']);
   }


           goTogroceries(){
    this.router.navigate(['/groceries']);
   }

           goToentertainment(){
    this.router.navigate(['/entertainment']);
   } 
   
   
              goTorent(){
    this.router.navigate(['/rent']);
   }

   
   
   
   
   goTosavings(){
    this.router.navigate(['/savings']);
   }
            
              goTodaily(){
    this.router.navigate(['/daily']);
   }
              goTotransaction(){
    this.router.navigate(['/transaction']);
   }

                 goTobottomnavigation(){
    this.router.navigate(['/bottomnavigation']);
   }
            
              goToprofile(){
    this.router.navigate(['/profile']);
   }
}