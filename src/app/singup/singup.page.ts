import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, eyeOffOutline, fingerPrintOutline, happyOutline, logoFacebook, logoGoogle, mailOutline } from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SingupPage implements OnInit {

  email: string = '';
  password: string = '';

  storedEmail: string = 'choimoi594@gmail.com';
  storedPassword: string = '12345678';

  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = '';

  isButtonDisabled: boolean = false;

  constructor(private router: Router) {
    addIcons({
      add, mailOutline, eyeOffOutline, logoGoogle,
      logoFacebook, happyOutline, fingerPrintOutline,
    });
  }

  ngOnInit() {
  }

  onLogin() {
    if (this.isButtonDisabled) {
      return;
    }

    if (this.email === this.storedEmail && this.password === this.storedPassword) {
      this.alertMessage = 'Login Successful';
      this.alertType = 'success';
    } else {
      if (this.email !== this.storedEmail) {
        this.alertMessage = 'Invalid Email';
      } else {
        this.alertMessage = 'Invalid Password';
      }
      this.alertType = 'error';


      this.isButtonDisabled = true;
    }

    this.showAlert = true;
  }

  closeAlert() {
    this.showAlert = false;
  }

  goTocreateaccount() {
    this.router.navigate(['/create-account']);
  }

  goToforgotpassword() {
    this.router.navigate(['/forgot-password']);
  }

  goTobottomnavigation() {
    this.router.navigate(['/bottomnavigation']);
  }

  goTosecurityfingerprint() {
    this.router.navigate(['/security-fingerprint']);
  }

}