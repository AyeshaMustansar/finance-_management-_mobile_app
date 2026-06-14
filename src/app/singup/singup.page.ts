import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, eyeOffOutline, fingerPrintOutline, happyOutline, logoFacebook, logoGoogle, mailOutline } from 'ionicons/icons';
@Component({
schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SingupPage implements OnInit {

  constructor( private router: Router ) {
  addIcons({ add,mailOutline ,
    eyeOffOutline,
    logoGoogle,
    logoFacebook,
    happyOutline,
    fingerPrintOutline,
    
  });
  }
    




  ngOnInit() {
    
    
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
