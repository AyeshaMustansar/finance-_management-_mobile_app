import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkboxOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-conditions',
  templateUrl: './conditions.page.html',
  styleUrls: ['./conditions.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConditionsPage implements OnInit {

  constructor() { 
    addIcons({
      homeOutline,
      swapHorizontalOutline,
      personOutline,
      searchOutline,
      checkboxOutline,
      layersOutline,
      notificationsOutline,
      chevronBackOutline,
    })
  }

  ngOnInit() {
  }

}
