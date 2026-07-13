import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, homeOutline, layersOutline, lockClosedOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({

  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  constructor( private router :Router) { 
    addIcons({

    homeOutline,
    personOutline,
    swapHorizontalOutline,
    layersOutline,
    chevronBackOutline,
    notificationsOutline,
    chevronForwardOutline,
    lockClosedOutline,
    searchOutline,
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


   goTonotificationsettings(){
    this.router.navigate(['/notification-settings']);
   }


   goTopaswordchange(){
    this.router.navigate(['/paswordchange']);
   }


      goTonotification(){
    this.router.navigate(['/notification']);
   }

    goTodeleteaccount(){
    this.router.navigate(['/delete-account']);
   }
}
