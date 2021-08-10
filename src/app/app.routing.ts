import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
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
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'auth', 
        loadChildren: () => import('./views/sessions/sessions.module').then(m => m.SessionsModule),
        data: { title: 'Session'} 
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

