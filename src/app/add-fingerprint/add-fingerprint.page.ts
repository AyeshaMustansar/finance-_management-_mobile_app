import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, fingerPrintOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-add-fingerprint',
  templateUrl: './add-fingerprint.page.html',
  styleUrls: ['./add-fingerprint.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddFingerprintPage implements OnInit {

  constructor( private router : Router) {
    addIcons({
      swapHorizontalOutline,
      homeOutline,
      personOutline,
      layersOutline,
      searchOutline,
      notificationsOutline,
      chevronBackOutline,
      fingerPrintOutline,
    })
   }

  ngOnInit() {
  }
 





  
  
                  goTotransaction(){
    this.router.navigate(['/transaction']);
   }

                 goTobottomnavigation(){
    this.router.navigate(['/bottomnavigation']);
   }

  goTocategories(){
    this.router.navigate(['/categories']);
   }


    goTodaily(){
    this.router.navigate(['/daily']);
   }
  

    goTofingerprint(){
      this.router.navigate(['/fingerprint'])
    }

      goTofingerprintchangesuccessfully(){
      this.router.navigate(['/fingerprintchangesuccessfully'])
    }

    goTonotification(){
    this.router.navigate(['/notification'])
   }
    }


