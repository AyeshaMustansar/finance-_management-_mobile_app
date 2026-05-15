import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, chevronDownOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-helpcenter',
  templateUrl: './helpcenter.page.html',
  styleUrls: ['./helpcenter.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HelpcenterPage implements OnInit {

  constructor() { 
    addIcons({
      homeOutline,
      personOutline,
      layersOutline,
      swapHorizontalOutline,
      searchOutline,
      notificationsOutline,
      chevronBackOutline,
      chevronDownOutline,

    })
  }

  ngOnInit() {
  }

}
