import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  chevronBackOutline,
  notificationsOutline,
  chevronForwardOutline,
  homeOutline,
  statsChartOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline,
  searchOutline
} from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class SecurityPage implements OnInit {

  constructor() {

    addIcons({
      chevronBackOutline,
      notificationsOutline,
      chevronForwardOutline,
      homeOutline,
      statsChartOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline,
      searchOutline,
    });

  }

  ngOnInit() {
  }

}