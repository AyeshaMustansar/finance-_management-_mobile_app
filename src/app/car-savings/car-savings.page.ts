import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { carOutline, chevronBackOutline, flagOutline, helpOutline, homeOutline, layersOutline, menu, menuOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-car-savings',
  templateUrl: './car-savings.page.html',
  styleUrls: ['./car-savings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CarSavingsPage implements OnInit {

  constructor() {
    addIcons({
      helpOutline,
      personOutline,
      swapHorizontalOutline,
      layersOutline,
      walletOutline,
      flagOutline,
      carOutline,
      menuOutline,
      homeOutline,
      chevronBackOutline,
      notificationsOutline,
      searchOutline,
    })
   }

  ngOnInit() {
  }

}
