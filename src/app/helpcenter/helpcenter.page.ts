import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronDownOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.page.html',
  styleUrls: ['./helpcenter.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HelpcenterPage implements OnInit {

  constructor(  private router :Router)  { 
    addIcons({
      homeOutline,
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      searchOutline,
      notificationsOutline,
      chevronBackOutline,
      chevronDownOutline,

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


   



    goToprofile(){
    this.router.navigate(['/profile']);
   }


      goTonotification(){
    this.router.navigate(['/notification']);
   }

    goTocontactus(){
    this.router.navigate(['/contact-us']);
   }


}

