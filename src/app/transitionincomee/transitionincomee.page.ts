import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { ellipsisHorizontalCircleSharp } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-transitionincomee',
  templateUrl: './transitionincomee.page.html',
  styleUrls: ['./transitionincomee.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class TransitionincomeePage implements OnInit {

  constructor() { 

    addIcons({
               ellipsisHorizontalCircleSharp,
    })
  }

  ngOnInit() {
  }

}
