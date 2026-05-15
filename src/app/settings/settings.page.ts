import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronForwardOutline, homeOutline, layersOutline, lockClosedOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {

  constructor() { 
    addIcons({

    homeOutline,
    personOutline,
    swapHorizontalOutline,
    layersOutline,
    chevronBackOutline,
    notificationsOutline,
    chevronForwardOutline,
    lockClosedOutline,
    searchOutline,
    })
  }

  ngOnInit() {
  }

}
