import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowDownOutline, arrowUpOutline, barChartOutline, calendarOutline, cardOutline, checkboxOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontal, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class DailyPage implements OnInit {

  constructor() {
    addIcons({
      arrowBackOutline,
      arrowDownOutline,
      searchOutline,
      calendarOutline,
      checkboxOutline,
      notificationsOutline,
      chevronBackOutline,
      walletOutline,
      cardOutline,
      arrowUpOutline,
      personOutline,
      layersOutline,
      swapHorizontal,
      barChartOutline,
      homeOutline,
      swapHorizontalOutline,

    })
   }

  ngOnInit() {
  }

}
