import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { chevronBackOutline, ellipseOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';
import { Location } from '@angular/common';
@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-addsavings',
  templateUrl: './addsavings.page.html',
  styleUrls: ['./addsavings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddsavingsPage implements OnInit {

  constructor(    private router: Router,
    private location:Location,

    ) { 
    addIcons(
      {
        homeOutline,
        personOutline,
        layersOutline,
        swapHorizontalOutline,
        chevronBackOutline,
        notificationsOutline,
        searchOutline,
        ellipseOutline,
      }
    )
  }

  ngOnInit() {
  }

   goToprofile(){
    this.router.navigate(['/profile']);
   }

      goTonotification(){
    this.router.navigate(['/notification']);
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

                

   

    goBack() {
  this.location.back();
}
 



}


