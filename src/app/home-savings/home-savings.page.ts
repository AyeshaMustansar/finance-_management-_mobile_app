import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, flagOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-home-savings',
  templateUrl: './home-savings.page.html',
  styleUrls: ['./home-savings.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomeSavingsPage implements OnInit {

  constructor() { 
  addIcons({
    chevronBackOutline,
    notificationsOutline,
    homeOutline,
    walletOutline,
    flagOutline,
    swapHorizontalOutline,
    searchOutline,
    layersOutline,
    personOutline,

    
    
  })
  }

  ngOnInit() {
  }

}
