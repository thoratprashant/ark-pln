import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from 'app/shared/shared-material.module'; 

import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthRoutes } from './auth.routing';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule, 
    RouterModule.forChild(AuthRoutes)
  ],
  declarations: [ SigninComponent, ForgotPasswordComponent, ResetPasswordComponent]
})
export class AuthModule { }