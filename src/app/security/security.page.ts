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
  chevronForwardOutline,
  homeOutline,
  statsChartOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline,
  searchOutline
} from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class SecurityPage implements OnInit {

  constructor( private router : Router) {

    addIcons({
      chevronBackOutline,
      notificationsOutline,
      chevronForwardOutline,
      homeOutline,
      statsChartOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline,
      searchOutline,
    });

  }

  ngOnInit() {
  }




  


                  goTotransaction(){
    this.router.navigate(['/transaction']);
   }

                 goTobottomnavigation(){
    this.router.navigate(['/bottomnavigation']);
   }

  goTocategories(){
    this.router.navigate(['/categories']);
   }


    goTodaily(){
    this.router.navigate(['/daily']);
   }


   
    goTochangepin(){
    this.router.navigate(['/changepin']);
   }


    goTofingerprint(){
    this.router.navigate(['/fingerprint']);
   }


    goToconditions(){
    this.router.navigate(['/conditions']);
   }
   goTonotification(){
    this.router.navigate(['/notification']);
   }


    goToprofile(){
    this.router.navigate(['/profile']);
   }





}