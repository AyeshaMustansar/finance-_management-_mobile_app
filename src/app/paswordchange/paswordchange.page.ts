import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, eyeOffOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchCircleOutline, searchOutline, swapHorizontal, swapHorizontalOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-paswordchange',
  templateUrl: './paswordchange.page.html',
  styleUrls: ['./paswordchange.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PaswordchangePage implements OnInit {

  constructor(   private router :Router ) {
    addIcons({
      chevronBackOutline,
      homeOutline,
      swapHorizontalOutline,
      personOutline,
      searchOutline,
      eyeOffOutline,
      notificationsOutline,
      layersOutline,

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


   


    goTopaswordchangesuccessfully(){
    this.router.navigate(['/paswordchangesuccessfully']);
   }



    goTosettings(){
    this.router.navigate(['/settings']);
   }

      goTonotification(){
    this.router.navigate(['/notification']);
   }

   
   







}
