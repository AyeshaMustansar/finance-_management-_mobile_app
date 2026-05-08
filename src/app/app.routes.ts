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
 
];
