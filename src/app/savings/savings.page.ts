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
  airplaneOutline,
  homeOutline,
  carOutline,
  heartOutline,
  searchOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-savings',
  templateUrl: './savings.page.html',
  styleUrls: ['./savings.page.scss'],
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
export class SavingsPage implements OnInit {

  constructor( private router: Router ) {

    addIcons({
      chevronBackOutline,
      notificationsOutline,
      arrowUpOutline,
      arrowDownOutline,
      checkboxOutline,
      airplaneOutline,
      homeOutline,
      carOutline,
      heartOutline,
      searchOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline
    });

  }

  ngOnInit() {
  }



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

  goTotravelsavings(){
    this.router.navigate(['/travelsavings']);
   }
   
  goTohomesavings(){
    this.router.navigate(['/home-savings']);
   }


     goTocarsavings(){
    this.router.navigate(['/car-savings']);
   }

      goToprofile(){
    this.router.navigate(['/profile']);
   }
     goToweddingsavings(){
    this.router.navigate(['/wedding-savings']);
   }

       goTonotification(){
    this.router.navigate(['/notification']);
   } 
}