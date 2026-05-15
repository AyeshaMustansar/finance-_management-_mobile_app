import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, eyeOffOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-changepin',
  templateUrl: './changepin.page.html',
  styleUrls: ['./changepin.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChangepinPage implements OnInit {

  constructor() {
    addIcons({
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      homeOutline,
      eyeOffOutline,
      chevronBackOutline,
      searchOutline,
      notificationsOutline,
    })
   }

  ngOnInit() {
  }

}
