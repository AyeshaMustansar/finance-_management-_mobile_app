import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowDownOutline, arrowUpOutline, barChartOutline, calendarOutline, cardOutline, checkboxOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-yearly',
  templateUrl: './yearly.page.html',
  styleUrls: ['./yearly.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class YearlyPage implements OnInit {

  constructor() { 
    addIcons({
      homeOutline,
      layersOutline,
      swapHorizontalOutline,
      barChartOutline,
      personOutline,
      cardOutline,
      arrowUpOutline,
      arrowDownOutline,
      searchOutline,
      notificationsOutline,
      chevronBackOutline,
      checkboxOutline,
      calendarOutline,


    })
  }

  ngOnInit() {
  }

}
