import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barChartOutline, basketOutline, calendarOutline, carOutline, cashOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, pencilOutline, personOutline, restaurantOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-quickanalysis',
  templateUrl: './quickanalysis.page.html',
  styleUrls: ['./quickanalysis.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuickanalysisPage implements OnInit {

  constructor() {
    addIcons({
      chevronBackOutline,
      notificationsOutline,
      carOutline,
      cashOutline,
      restaurantOutline,
      calendarOutline,
      searchOutline,
     homeOutline,
     barChartOutline,
     pencilOutline,
     swapHorizontalOutline,
     layersOutline,
     personOutline,
    basketOutline,

  
    })
   }

  ngOnInit() {
  }

}
