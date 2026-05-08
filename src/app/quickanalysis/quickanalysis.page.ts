import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
    selector: 'app-quickanalysis',
  templateUrl: './quickanalysis.page.html',
  styleUrls: ['./quickanalysis.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class QuickanalysisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
