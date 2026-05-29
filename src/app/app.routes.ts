import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then( m => m.WelcomePage)
  },
  {
    path: 'singup',
    loadComponent: () => import('./singup/singup.page').then( m => m.SingupPage)
  },
  {
    path: 'analysis',
    loadComponent: () => import('./analysis/analysis.page').then( m => m.AnalysisPage)
  },
  {
    path: 'notification',
    loadComponent: () => import('./notification/notification.page').then( m => m.NotificationPage)
  },
  {
    path: 'accountbalance',
    loadComponent: () => import('./accountbalance/accountbalance.page').then( m => m.AccountbalancePage)
  },
  {
    path: 'quickanalysis',
    loadComponent: () => import('./quickanalysis/quickanalysis.page').then( m => m.QuickanalysisPage)
  },
  {
    path: 'transaction',
    loadComponent: () => import('./transaction/transaction.page').then( m => m.TransactionPage)
  },
  {
    path: 'bottomnavigation',
    loadComponent: () => import('./bottomnavigation/bottomnavigation.page').then( m => m.BottomnavigationPage)
  },
  {
    path: 'daily',
    loadComponent: () => import('./daily/daily.page').then( m => m.DailyPage)
  },
  {
    path: 'weekly',
    loadComponent: () => import('./weekly/weekly.page').then( m => m.WeeklyPage)
  },
  {
    path: 'monthly',
    loadComponent: () => import('./monthly/monthly.page').then( m => m.MonthlyPage)
  },
  {
    path: 'yearly',
    loadComponent: () => import('./yearly/yearly.page').then( m => m.YearlyPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./search/search.page').then( m => m.SearchPage)
  },
  {
    path: 'calenderspend',
    loadComponent: () => import('./calenderspend/calenderspend.page').then( m => m.CalenderspendPage)
  },
  {
    path: 'transactionincome',
    loadComponent: () => import('./transactionincome/transactionincome.page').then( m => m.TransactionincomePage)
  },
  {
    path: 'transitionincomee',
    loadComponent: () => import('./transitionincomee/transitionincomee.page').then( m => m.TransitionincomeePage)
  },
  {
    path: 'trnasitionexpense',
    loadComponent: () => import('./trnasitionexpense/trnasitionexpense.page').then( m => m.TrnasitionexpensePage)
  },
  {
    path: 'expense',
    loadComponent: () => import('./expense/expense.page').then( m => m.ExpensePage)
  },
  {
    path: 'categories',
    loadComponent: () => import('./categories/categories.page').then( m => m.CategoriesPage)
  },
  {
    path: 'food',
    loadComponent: () => import('./food/food.page').then( m => m.FoodPage)
  },

  {
    path: 'transport',
    loadComponent: () => import('./transport/transport.page').then( m => m.TransportPage)
  },
  {
    path: 'groceries',
    loadComponent: () => import('./groceries/groceries.page').then( m => m.GroceriesPage)
  },
  {
    path: 'rent',
    loadComponent: () => import('./rent/rent.page').then( m => m.RentPage)
  },
  {
    path: 'medicine',
    loadComponent: () => import('./medicine/medicine.page').then( m => m.MedicinePage)
  },
  {
    path: 'entertainment',
    loadComponent: () => import('./entertainment/entertainment.page').then( m => m.EntertainmentPage)
  },
  {
    path: 'add-expense',
    loadComponent: () => import('./add-expense/add-expense.page').then( m => m.AddExpensePage)
  },
  {
    path: 'savings',
    loadComponent: () => import('./savings/savings.page').then( m => m.SavingsPage)
  },
  {
    path: 'travelsavings',
    loadComponent: () => import('./travelsavings/travelsavings.page').then( m => m.TravelsavingsPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  {
    path: 'editprofile',
    loadComponent: () => import('./editprofile/editprofile.page').then( m => m.EditprofilePage)
  },
  {
    path: 'security',
    loadComponent: () => import('./security/security.page').then( m => m.SecurityPage)
  },
  {
    path: 'changepin',
    loadComponent: () => import('./changepin/changepin.page').then( m => m.ChangepinPage)
  },

  {
    path: 'pinchangesuccessfully',
    loadComponent: () => import('./pinchangesuccessfully/pinchangesuccessfully.page').then( m => m.PinchangesuccessfullyPage)
  },
  {
    path: 'fingerprint',
    loadComponent: () => import('./fingerprint/fingerprint.page').then( m => m.FingerprintPage)
  },
  {
    path: 'jhon-fingerprint',
    loadComponent: () => import('./jhon-fingerprint/jhon-fingerprint.page').then( m => m.JhonFingerprintPage)
  },
  {
    path: 'fingerprint-elaminate',
    loadComponent: () => import('./fingerprint-elaminate/fingerprint-elaminate.page').then( m => m.FingerprintElaminatePage)
  },
  {
    path: 'add-fingerprint',
    loadComponent: () => import('./add-fingerprint/add-fingerprint.page').then( m => m.AddFingerprintPage)
  },
  {
    path: 'fingerprintchangesuccessfully',
    loadComponent: () => import('./fingerprintchangesuccessfully/fingerprintchangesuccessfully.page').then( m => m.FingerprintchangesuccessfullyPage)
  },
  {
    path: 'conditions',
    loadComponent: () => import('./conditions/conditions.page').then( m => m.ConditionsPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  {
    path: 'notification-settings',
    loadComponent: () => import('./notification-settings/notification-settings.page').then( m => m.NotificationSettingsPage)
  },
  {
    path: 'paswordchange',
    loadComponent: () => import('./paswordchange/paswordchange.page').then( m => m.PaswordchangePage)
  },
  {
    path: 'paswordchangesuccessfully',
    loadComponent: () => import('./paswordchangesuccessfully/paswordchangesuccessfully.page').then( m => m.PaswordchangesuccessfullyPage)
  },
  {
    path: 'delete-account',
    loadComponent: () => import('./delete-account/delete-account.page').then( m => m.DeleteAccountPage)
  },
  {
    path: 'helpcenter',
    loadComponent: () => import('./helpcenter/helpcenter.page').then( m => m.HelpcenterPage)
  },
  
 
  {
    path: 'contact-us',
    loadComponent: () => import('./contact-us/contact-us.page').then( m => m.ContactUsPage)
  },
  {
    path: 'online-support',
    loadComponent: () => import('./online-support/online-support.page').then( m => m.OnlineSupportPage)
  },
  {
    path: 'home-savings',
    loadComponent: () => import('./home-savings/home-savings.page').then( m => m.HomeSavingsPage)
  },
  {
    path: 'wedding-savings',
    loadComponent: () => import('./wedding-savings/wedding-savings.page').then( m => m.WeddingSavingsPage)
  },
  {
    path: 'car-savings',
    loadComponent: () => import('./car-savings/car-savings.page').then( m => m.CarSavingsPage)
  },

 
  

 
];
