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
  searchOutline,
  headsetOutline,
  globeOutline,
  chevronForwardOutline,
  logoFacebook,
  logoWhatsapp,
  logoInstagram,
  homeOutline,
  statsChartOutline,
  swapHorizontalOutline,
  layersOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
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
export class ContactUsPage implements OnInit {

  constructor() {

    addIcons({
      chevronBackOutline,
      notificationsOutline,
      searchOutline,
      headsetOutline,
      globeOutline,
      chevronForwardOutline,
      logoFacebook,
      logoWhatsapp,
      logoInstagram,
      homeOutline,
      statsChartOutline,
      swapHorizontalOutline,
      layersOutline,
      personOutline
    });

  }

  ngOnInit() {
  }

}