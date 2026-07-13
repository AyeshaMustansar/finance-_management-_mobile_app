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
  personOutline,
  chevronForwardOutline,
  shieldCheckmarkOutline,
  settingsOutline,
  helpCircleOutline,
  logOutOutline,
  homeOutline,
  searchOutline,
  swapHorizontalOutline,
  layersOutline
} from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
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
export class ProfilePage implements OnInit {

  constructor ( private router: Router) {

    addIcons({
      chevronBackOutline,
      personOutline,
      chevronForwardOutline,
      shieldCheckmarkOutline,
      settingsOutline,
      helpCircleOutline,
      logOutOutline,
      homeOutline,
      searchOutline,
      swapHorizontalOutline,
      layersOutline
    });

  }

  ngOnInit() {
  }


    goToeditprofile(){
    this.router.navigate(['/editprofile']);
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


      goTosecurity(){
    this.router.navigate(['/security']);
   }


     goTosettings(){
    this.router.navigate(['/settings']);
   }

     goTohelpcenter(){
    this.router.navigate(['/helpcenter']);
   }

}

