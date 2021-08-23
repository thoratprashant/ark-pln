import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { BrokerAuthLayoutComponent } from './shared/components/layouts/broker-auth-layout/broker-auth-layout.component';
import { BrokerLayoutComponent } from './shared/components/layouts/broker-layout/broker-layout.component'; 
import { CmpLayoutComponent } from './shared/components/layouts/cmp-layout/cmp-layout.component';
import { LoanProcessorLayoutComponent } from './shared/components/layouts/loan-processor-layout/loan-processor-layout.component';
import { PreLoginLayoutComponent } from './shared/components/layouts/pre-login/pre-login-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const rootRouterConfig: Routes = [ 

  // Landing layout 
  {
    path: '', 
    component: PreLoginLayoutComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./views/pre-login/pre-login.module').then(m => m.PreLoginModule),
        data: { title: 'Prelogin'} 
      }
    ]
  },

  // All signup module
  {
    path: '', 
    component: BrokerAuthLayoutComponent,
    children: [
      { 
        path: 'signup', 
        loadChildren: () => import('./views/auth/signup/signup.module').then(m => m.SignupModule),
        data: { title: 'Signup'} 
      }
    ]
  },

  // After login pages > Broker
  {
    path: '', 
    component: BrokerLayoutComponent,
    children: [
      { 
        path: 'broker', 
        loadChildren: () => import('./views/broker/broker.module').then(m => m.BrokerModule),
        data: { title: 'Broker'} 
      }
    ]
  },


  // After login pages > Loan Processor
  {
    path: '', 
    component: LoanProcessorLayoutComponent,
    children: [
      { 
        path: 'loan-processor', 
        loadChildren: () => import('./views/loan-processor/loan-processor.module').then(m => m.LoanProcessorModule),
        data: { title: 'Loan Processor'} 
      }
    ]
  },



   // After login pages > CMP
   {
    path: '', 
    component: CmpLayoutComponent,
    children: [
      { 
        path: 'cmp', 
        loadChildren: () => import('./views/cmp/cmp.module').then(m => m.CmpModule),
        data: { title: 'CMP'} 
      }
    ]
  },





  // Signin, forgot password, reset password pages
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule),
        data: { title: 'Auth'} 
      }
    ]
  },
 
  // Page not found
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

