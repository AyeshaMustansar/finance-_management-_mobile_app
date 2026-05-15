import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, fingerPrintOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-jhon-fingerprint',
  templateUrl: './jhon-fingerprint.page.html',
  styleUrls: ['./jhon-fingerprint.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class JhonFingerprintPage implements OnInit {

  constructor() { 
    addIcons({
      swapHorizontalOutline,
      personOutline,
      layersOutline,
      homeOutline,
      notificationsOutline,
      chevronBackOutline,
      fingerPrintOutline,
      searchOutline,
    })
  }

  ngOnInit() {
  }

}
