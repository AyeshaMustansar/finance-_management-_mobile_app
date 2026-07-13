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
  homeOutline,
  searchOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
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
export class EditprofilePage implements OnInit {

  constructor(   private router: Router  ) {

    addIcons({
      chevronBackOutline,
      notificationsOutline,
      homeOutline,
      searchOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline
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

   goTonotification(){
    this.router.navigate(['/notification']);
   }
   
    goToprofile(){
    this.router.navigate(['/profile']);
   }


}