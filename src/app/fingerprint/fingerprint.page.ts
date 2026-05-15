import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline, chevronBackOutline, chevronForwardOutline, fingerPrintOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-fingerprint',
  templateUrl: './fingerprint.page.html',
  styleUrls: ['./fingerprint.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FingerprintPage implements OnInit {

  constructor() { 
    addIcons({
      chevronForwardOutline,
      notificationsOutline,
      chevronBackOutline,
      addOutline,
      swapHorizontalOutline,
      searchOutline,
      homeOutline,
      personOutline,
      layersOutline,
      fingerPrintOutline,
      

    })
  }

  ngOnInit() {
  }

}
