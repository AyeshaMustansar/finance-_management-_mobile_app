import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  chevronBackOutline,
  notificationsOutline,
  arrowUpOutline,
  arrowDownOutline,
  checkboxOutline,
  menuOutline,
  flameOutline,
  constructOutline,
  carOutline,
  waterOutline,
  busOutline,
  homeOutline,
  searchOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.page.html',
  styleUrls: ['./transport.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class TransportPage implements OnInit {

  constructor( private router: Router) {

    addIcons({
      chevronBackOutline,
      notificationsOutline,
      arrowUpOutline,
      arrowDownOutline,
      checkboxOutline,
      menuOutline,
      flameOutline,
      constructOutline,
      carOutline,
      waterOutline,
      busOutline,
      homeOutline,
      searchOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline
    });

  }

  ngOnInit() {}

  
  
                    goTocategories(){
    this.router.navigate(['/categories']);
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




                      goToaddexpense(){
    this.router.navigate(['/add-expense']);
   }

      goToprofile(){
    this.router.navigate(['/profile']);
   }



     goTonotification(){
    this.router.navigate(['/notification']);
   }  
}