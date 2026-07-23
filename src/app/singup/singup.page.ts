import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, eyeOffOutline, eyeOutline, fingerPrintOutline, happyOutline, logoFacebook, logoGoogle, mailOutline } from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, ReactiveFormsModule]
})
export class SingupPage implements OnInit {

  storedEmail: string = 'choimoi594@gmail.com';
  storedPassword: string = 'A123456789@';

  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = '';

  failedAttempts: number = 0;
  isButtonDisabled: boolean = false;
  countdown: number = 10;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, this.gmailValidator]),
    password: new FormControl('', [Validators.required, this.strongPasswordValidator])
  });

  constructor(private router: Router) {
    addIcons({
      add, mailOutline, eyeOffOutline, logoGoogle,
      logoFacebook, happyOutline, fingerPrintOutline, eyeOutline,
    });
  }

  ngOnInit() {
  }

  gmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    return value.includes('@gmail.com') ? null : { notGmail: true };
  }

  strongPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';
    const minLength = value.length >= 7;
    const hasUpperCase = /[A-Z]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasDigit = /[0-9]/.test(value);

    const valid = minLength && hasUpperCase && hasSpecialChar && hasDigit;
    return valid ? null : { weakPassword: true };
  }

  get hasMinLength(): boolean {
    return (this.loginForm.get('password')?.value || '').length >= 7;
  }

  get hasUpperCase(): boolean {
    return /[A-Z]/.test(this.loginForm.get('password')?.value || '');
  }

  get hasSpecialChar(): boolean {
    return /[!@#$%^&*(),.?":{}|<>]/.test(this.loginForm.get('password')?.value || '');
  }

  get hasDigitChar(): boolean {
    return /[0-9]/.test(this.loginForm.get('password')?.value || '');
  }

  onLogin() {
    if (this.isButtonDisabled || this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email === this.storedEmail && password === this.storedPassword) {
      this.alertMessage = 'Login Successful';
      this.alertType = 'success';
      this.failedAttempts = 0;
    } else {
      this.failedAttempts++;

      if (email !== this.storedEmail) {
        this.alertMessage = 'Invalid Email';
      } else {
        this.alertMessage = 'Invalid Password';
      }
      this.alertType = 'error';

      if (this.failedAttempts >= 3) {
        this.startLockout();
      }
    }

    this.showAlert = true;
  }

  startLockout() {
    this.isButtonDisabled = true;
    this.countdown = 10;
    this.alertMessage = 'Too many attempts. Try again in 10 seconds';
    this.alertType = 'error';

    const timer = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        clearInterval(timer);
        this.isButtonDisabled = false;
        this.failedAttempts = 0;
      }
    }, 1000);
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