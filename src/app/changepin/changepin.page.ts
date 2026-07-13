import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, eyeOffOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-changepin',
  templateUrl: './changepin.page.html',
  styleUrls: ['./changepin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChangepinPage implements OnInit {

  constructor( private router :Router ) {
    addIcons({
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      homeOutline,
      eyeOffOutline,
      chevronBackOutline,
      searchOutline,
      notificationsOutline,
    })
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

       goTopinchangesuccessfully(){
    this.router.navigate(['/pinchangesuccessfully']);
   }


    goTosecurity(){
    this.router.navigate(['/security']);
   }


   
      goTonotification(){
    this.router.navigate(['/notification']);
   }

}

