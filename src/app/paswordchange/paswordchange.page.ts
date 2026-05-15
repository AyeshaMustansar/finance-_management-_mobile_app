import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, eyeOffOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchCircleOutline, searchOutline, swapHorizontal, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-paswordchange',
  templateUrl: './paswordchange.page.html',
  styleUrls: ['./paswordchange.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PaswordchangePage implements OnInit {

  constructor() {
    addIcons({
      chevronBackOutline,
      homeOutline,
      swapHorizontalOutline,
      personOutline,
      searchOutline,
      eyeOffOutline,
      notificationsOutline,
      layersOutline,

    })
   }

  ngOnInit() {
  }

}
