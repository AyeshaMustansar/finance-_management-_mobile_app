import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, eyeOffOutline, logoFacebook, logoGoogle, mailOutline } from 'ionicons/icons';
@Component({
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SingupPage implements OnInit {

  constructor() {
  addIcons({ add,mailOutline ,
    eyeOffOutline,
    logoGoogle,
    logoFacebook,
    
  });
  }
    




  ngOnInit() {
    
    
  }

}
