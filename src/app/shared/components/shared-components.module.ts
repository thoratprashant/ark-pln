import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedMaterialModule } from '../shared-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SearchModule } from '../search/search.module';
import { SharedPipesModule } from '../pipes/shared-pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedDirectivesModule } from '../directives/shared-directives.module';

// ONLY REQUIRED FOR **SIDE** NAVIGATION LAYOUT
import { HeaderSideComponent } from './header-side/header-side.component';
import { SidebarSideComponent } from './sidebar-side/sidebar-side.component';

// ONLY REQUIRED FOR **TOP** NAVIGATION LAYOUT
import { HeaderTopComponent } from './header-top/header-top.component';
import { SidebarTopComponent } from './sidebar-top/sidebar-top.component';
 

// ALWAYS REQUIRED 
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { AppComfirmComponent } from '../services/app-confirm/app-confirm.component';
import { AppLoaderComponent } from '../services/app-loader/app-loader.component';
import { ButtonLoadingComponent } from './button-loading/button-loading.component';
import { marcoSidebarComponent, marcoSidebarTogglerDirective } from './marco-sidebar/marco-sidebar.component'; 

import { PreLoginLayoutComponent } from './layouts/pre-login/pre-login-layout.component'; 
import { PreLoginHeaderTopComponent } from './pre-login-header-top/pre-login-header-top.component';
import { PreLoginFooterComponent } from './pre-login-footer/pre-login-footer.component';
import { BrokerLayoutComponent } from './layouts/broker-layout/broker-layout.component';
import { BrokerHeaderTopComponent } from './broker-top-header/broker-top-header.component';


const components = [
  HeaderTopComponent,
  SidebarTopComponent,
  SidenavComponent,
  NotificationsComponent,
  SidebarSideComponent,
  HeaderSideComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  BreadcrumbComponent,
  AppComfirmComponent,
  AppLoaderComponent, 
  ButtonLoadingComponent,
  marcoSidebarComponent,
  FooterComponent,
  marcoSidebarTogglerDirective, 

  PreLoginLayoutComponent,
  PreLoginHeaderTopComponent,
  PreLoginFooterComponent,
  BrokerLayoutComponent,
  BrokerHeaderTopComponent
]

@NgModule({
  imports: [
  CommonModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    PerfectScrollbarModule,
    SearchModule,
    SharedPipesModule,
    SharedDirectivesModule,
    SharedMaterialModule
  ],
  declarations: components,
  entryComponents: [AppComfirmComponent, AppLoaderComponent,],
  exports: components
})
export class SharedComponentsModule {}