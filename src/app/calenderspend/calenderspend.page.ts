import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { barChartOutline, basketOutline, cashOutline, chevronBackOutline, chevronDownOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-calenderspend',
  templateUrl: './calenderspend.page.html',
  styleUrls: ['./calenderspend.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CalenderspendPage implements OnInit {

  constructor() { 
    addIcons({
      chevronBackOutline,
      notificationsOutline,
      chevronDownOutline,
      basketOutline,
      cashOutline,
      personOutline,
      swapHorizontalOutline,
      barChartOutline,
      layersOutline,
      homeOutline,
      searchOutline,
      
    })
  }

  ngOnInit() {
  }

}
