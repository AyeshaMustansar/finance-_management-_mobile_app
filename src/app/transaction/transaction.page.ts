import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, barChartOutline, basketOutline, busOutline, cardOutline, cashOutline, checkboxOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, restaurantOutline, searchOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TransactionPage implements OnInit {

  constructor() { 
    addIcons({
      arrowBackOutline,
      notificationsOutline,
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      barChartOutline,
      homeOutline,
      restaurantOutline,
      busOutline,
      basketOutline,
      cashOutline,
      checkboxOutline,
      cardOutline,
      walletOutline,
      chevronBackOutline,
      searchOutline,
    })
  }

  ngOnInit() {
  }

}
