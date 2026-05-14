import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowDownOutline, arrowUpOutline, basketOutline, carOutline, cashOutline, chevronBackOutline, fastFoodOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-transactionincome',
  templateUrl: './transactionincome.page.html',
  styleUrls: ['./transactionincome.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TransactionincomePage implements OnInit {

  constructor() { 
    addIcons({
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      searchOutline,
      homeOutline,
      notificationsOutline,
      chevronBackOutline,
      fastFoodOutline,
      carOutline,
      basketOutline,
      cashOutline,
      arrowUpOutline,
      arrowDownOutline,

    })
   }

  ngOnInit() {
  }

}
