import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barChartOutline, cashOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, shieldCheckmarkOutline, swapHorizontalOutline, trendingDownOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NotificationPage implements OnInit {

  constructor() {
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

    })
   }

  ngOnInit() {
  }

}
