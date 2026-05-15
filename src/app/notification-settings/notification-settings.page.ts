import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-notification-settings',
  templateUrl: './notification-settings.page.html',
  styleUrls: ['./notification-settings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NotificationSettingsPage implements OnInit {

  constructor() { 
    addIcons({
      personOutline,
      homeOutline,
      layersOutline,
      searchOutline,
      swapHorizontalOutline,
      notificationsOutline,
      chevronBackOutline,
    })
  }

  ngOnInit() {
  }

}
