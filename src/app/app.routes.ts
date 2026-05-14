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
  

 
];
