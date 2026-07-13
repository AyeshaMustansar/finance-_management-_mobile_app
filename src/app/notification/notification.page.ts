import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowRedo, barChartOutline, cash, cashOutline, chevronBackOutline, homeOutline, layersOutline, notifications, notificationsOutline, personOutline, searchOutline, shieldCheckmarkOutline, star, swapHorizontalOutline, trendingDownOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NotificationPage implements OnInit {
  
  constructor(private router :Router,
     private location: Location,

  ) {
    addIcons({
      notificationsOutline,
      cashOutline,
      shieldCheckmarkOutline,
      chevronBackOutline,
      trendingDownOutline,
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      barChartOutline,
      homeOutline,
      searchOutline,
      cash,
      notifications,
      star,
      arrowRedo,

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

   
 goBack() {
  this.location.back();
}

}
