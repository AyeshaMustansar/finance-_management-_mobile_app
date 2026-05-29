import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkboxOutline, chevronBackOutline, diamondOutline, flagOutline, homeOutline, layersOutline, menuOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-wedding-savings',
  templateUrl: './wedding-savings.page.html',
  styleUrls: ['./wedding-savings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeddingSavingsPage implements OnInit {

  constructor() {
    addIcons({
      diamondOutline,notificationsOutline,
      chevronBackOutline,
      flagOutline,
      walletOutline,
      checkboxOutline,
      menuOutline,
      homeOutline,
      personOutline,
      swapHorizontalOutline,
      layersOutline,
      searchOutline,
    })
   }

  ngOnInit() {
  }

}
