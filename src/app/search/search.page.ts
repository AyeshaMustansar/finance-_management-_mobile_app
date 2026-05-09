import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBackOutline, barChartOutline, calendarOutline, chevronDownOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SearchPage implements OnInit {

  constructor() { 
    addIcons({
      searchOutline,
    
      arrowBackOutline,
      calendarOutline,
      chevronDownOutline,
      personOutline,
      homeOutline,
      swapHorizontalOutline,
      layersOutline,
      barChartOutline,
      notificationsOutline,

    })
  }

  ngOnInit() {
  }

}
