import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowDown, arrowDownOutline, arrowUp, arrowUpOutline, barChartOutline, basketOutline, busOutline, cardOutline, cashOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-accountbalance',
  templateUrl: './accountbalance.page.html',
  styleUrls: ['./accountbalance.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AccountbalancePage implements OnInit {

  constructor() { 
    addIcons({
     cardOutline,
     chevronBackOutline,
     notificationsOutline,
     walletOutline,
   
     busOutline,
     homeOutline,
     basketOutline,
     cashOutline,
     arrowUp,
     arrowDown,
     barChartOutline,
     swapHorizontalOutline,
     layersOutline,
     personOutline,
     

    })
  }

  ngOnInit() {
  }

}
