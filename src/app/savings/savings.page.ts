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
  arrowUpOutline,
  arrowDownOutline,
  checkboxOutline,
  airplaneOutline,
  homeOutline,
  carOutline,
  heartOutline,
  searchOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-savings',
  templateUrl: './savings.page.html',
  styleUrls: ['./savings.page.scss'],
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
export class SavingsPage implements OnInit {

  constructor() {

    addIcons({
      chevronBackOutline,
      notificationsOutline,
      arrowUpOutline,
      arrowDownOutline,
      checkboxOutline,
      airplaneOutline,
      homeOutline,
      carOutline,
      heartOutline,
      searchOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline
    });

  }

  ngOnInit() {
  }

}