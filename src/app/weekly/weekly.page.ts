import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowDownOutline, arrowUpOutline, barChartOutline, calendarOutline, cardOutline, checkboxOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-weekly',
  templateUrl: './weekly.page.html',
  styleUrls: ['./weekly.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeeklyPage implements OnInit {

  constructor() { 
    addIcons({
      homeOutline,
      layersOutline,
      swapHorizontalOutline,
      barChartOutline,
      personOutline,
      cardOutline,
      arrowDownOutline,
      arrowUpOutline,
      searchOutline,
      walletOutline,
      notificationsOutline,
      chevronBackOutline,
      checkboxOutline,
      calendarOutline,

    })
  }

  ngOnInit() {
  }

}
