import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barChartOutline, basketOutline, cardOutline, carOutline, cashOutline, checkboxOutline, homeOutline, layersOutline, notificationsOutline, personOutline, restaurantOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-bottomnavigation',
  templateUrl: './bottomnavigation.page.html',
  styleUrls: ['./bottomnavigation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class BottomnavigationPage implements OnInit {

  constructor() {
    addIcons({
      checkboxOutline,
      cashOutline,
      cardOutline,
      walletOutline,
      notificationsOutline,
      carOutline,
      restaurantOutline,
      homeOutline,
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      barChartOutline,
      basketOutline,
    })
   }

  ngOnInit() {
  }

}
