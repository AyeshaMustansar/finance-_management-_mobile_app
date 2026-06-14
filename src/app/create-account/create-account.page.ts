import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CreateAccountPage implements OnInit {

  constructor(  private router: Router) { }

  ngOnInit() {
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
