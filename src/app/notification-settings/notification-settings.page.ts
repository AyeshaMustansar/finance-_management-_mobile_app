import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NotificationSettingsPage implements OnInit {

  constructor( private router: Router) { 
    addIcons({
      personOutline,
      homeOutline,
      layersOutline,
      searchOutline,
      swapHorizontalOutline,
      notificationsOutline,
      chevronBackOutline,
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


   
      goTonotification(){
    this.router.navigate(['/notification']);
   }



    goTosettings(){
    this.router.navigate(['/settings']);
   }


}
