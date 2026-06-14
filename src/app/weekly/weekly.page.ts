import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Router } from '@angular/router';
import { arrowDownOutline, arrowUpOutline, barChartOutline, calendarOutline, cardOutline, checkboxOutline, chevronBackOutline, homeOutline, layersOutline, notificationsOutline, personOutline, searchOutline, swapHorizontalOutline, walletOutline } from 'ionicons/icons';

@Component({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-weekly',
  templateUrl: './weekly.page.html',
  styleUrls: ['./weekly.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeeklyPage implements OnInit {

  constructor(      private router: Router  ) { 
    addIcons({
      homeOutline,
      layersOutline,
      swapHorizontalOutline,
      barChartOutline,
      personOutline,
      cardOutline,
      arrowDownOutline,
      arrowUpOutline,
      searchOutline,
      walletOutline,
      notificationsOutline,
      chevronBackOutline,
      checkboxOutline,
      calendarOutline,

    })
  }

  ngOnInit() {
  }

   goTomonthly() {
    this.router.navigate(['/monthly']);
  }



  

   goToyearly() {
    this.router.navigate(['/yearly']);


  }




   

    goTodaily() {
    this.router.navigate(['/daily']);
  }

     goTobottomnavigation() {
    this.router.navigate(['/bottomnavigation']);
   }
      goTotransaction(){
    this.router.navigate(['/transaction']);
   }

   goTocategories(){
    this.router.navigate(['/categories']);
   }

    goToprofile(){
    this.router.navigate(['/profile']);
   }  
}
