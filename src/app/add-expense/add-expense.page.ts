import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
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
  chevronDownOutline,
  ellipse,
  swapHorizontalOutline,
  personOutline,
  homeOutline,
  layersOutline,
  searchOutline
} from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
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
export class AddExpensePage implements OnInit {

  constructor(
  private router: Router,
  private location: Location
) 
   {

    addIcons({
      chevronBackOutline,
      notificationsOutline,
      chevronDownOutline,
      ellipse,
      swapHorizontalOutline,
      personOutline,
      homeOutline,
      layersOutline,
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

   
    goTonotification(){
    this.router.navigate(['/notification']);
   }




   goBack() {
  this.location.back();
}
}