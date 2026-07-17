import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon, CommonModule, FormsModule]
})
export class CreateAccountPage implements OnInit {

  email: string = '';
  password: string = '';
  confirmpassword: string = '';
  number: string = '';
  datebirth: string = '';
  name: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSingup() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Datebirth:', this.datebirth);
    console.log('Confirmpassword:', this.confirmpassword);
    console.log('Number:', this.number);
    console.log('Name:', this.name);
    this.goTobottomnavigation();
  }

  goTosingup() {
    this.router.navigate(['/singup']);
  }

  goToconditions() {
    this.router.navigate(['/conditions']);
  }

  goTobottomnavigation() {
    this.router.navigate(['/bottomnavigation']);
  }

}