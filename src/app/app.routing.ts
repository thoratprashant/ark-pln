import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';

export const rootRouterConfig: Routes = [
   
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'auth', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session'} 
      }
    ]
  },

  // Landing layout 
  {
    path: '', 
    component: AdminLayoutComponent,
    children: [
      { 
        path: 'home', 
        loadChildren: () => import('./views/pre-login/pre-login.module').then(m => m.PreLoginModule),
        data: { title: 'Prelogin'} 
      }
    ]
  },

  {
    path: '', 
    component: AdminLayoutComponent,
    children: [ 
      {
        path: 'profile', 
        loadChildren: () => import('./views/profile/profile.module').then(m => m.ProfileModule), 
        data: { title: 'Profile', breadcrumb: 'Profile'}
      },
      {
        path: 'others', 
        loadChildren: () => import('./views/others/others.module').then(m => m.OthersModule), 
        data: { title: 'Others', breadcrumb: 'Others'}
      }, 
      {
        path: 'orders',
        loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule),
        data: { title: 'Orders', breadcrumb: 'Orders'}
      },
      {
        path: 'page-layouts',
        loadChildren: () => import('./views/page-layouts/page-layouts.module').then(m => m.PageLayoutsModule)
      },
      
      {
        path: 'icons', 
        loadChildren: () => import('./views/mat-icons/mat-icons.module').then(m => m.MatIconsModule), 
        data: { title: 'Icons', breadcrumb: 'Maticons'}
      }, 
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

