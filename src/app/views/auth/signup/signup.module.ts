import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from 'app/shared/shared-material.module'; 

import { FlexLayoutModule } from '@angular/flex-layout';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
   
import { SignupRoutes } from './signup.routing';
import { BrokerSignUpComponent } from './broker/broker-sign-up/broker-sign-up.component';
import { LpSignUpComponent } from './loan-processor/lp-sign-up/lp-sign-up.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule, 
    RouterModule.forChild(SignupRoutes)
  ],
  declarations: [ 
    BrokerSignUpComponent, LpSignUpComponent
  ]
})
export class SignupModule { }