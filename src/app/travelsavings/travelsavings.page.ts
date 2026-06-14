import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { airplaneOutline, checkboxOutline, chevronBackOutline, flagOutline, homeOutline, layersOutline, menuOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-travelsavings',
  templateUrl: './travelsavings.page.html',
  styleUrls: ['./travelsavings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TravelsavingsPage implements OnInit {

  constructor(  private router: Router) {
    addIcons({
      chevronBackOutline,
      notificationsOutline,
      flagOutline,
      walletOutline,
      airplaneOutline,
      checkboxOutline,
      layersOutline,
      swapHorizontalOutline,
      personOutline,
      searchOutline,
      menuOutline,
      homeOutline,

    })
   }

  ngOnInit() {
  }

     goToaddsavings(){
    this.router.navigate(['/addsavings']);
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
