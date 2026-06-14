import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoFacebook, logoGoogle } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]


})
export class ForgotPasswordPage implements OnInit {

  constructor( private router: Router  ) { 
    addIcons({
      logoGoogle,
      logoFacebook,
    })
  }

  ngOnInit() {
  }

  goTocreateaccount() {
    this.router.navigate(['/create-account']);
  }

  goTonewpassword() {
    this.router.navigate(['/new-password']);
  }

}
