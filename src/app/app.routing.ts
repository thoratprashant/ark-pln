import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { BrokerAuthLayoutComponent } from './shared/components/layouts/broker-auth-layout/broker-auth-layout.component';
import { BrokerLayoutComponent } from './shared/components/layouts/broker-layout/broker-layout.component';
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

  {
    path: '', 
    component: BrokerAuthLayoutComponent,
    children: [
      { 
        path: 'broker', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Signup'} 
      }
    ]
  },

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
 
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

