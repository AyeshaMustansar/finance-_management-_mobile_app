import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, eyeOffOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-delete-account',
  templateUrl: './delete-account.page.html',
  styleUrls: ['./delete-account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DeleteAccountPage implements OnInit {

  constructor( private router:Router) { 
    addIcons({
      homeOutline,
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      notificationsOutline,
      chevronBackOutline,
      eyeOffOutline,
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


   



    goTosettings(){
    this.router.navigate(['/settings']);
   }

      goTonotification(){
    this.router.navigate(['/notification']);
   }





}
