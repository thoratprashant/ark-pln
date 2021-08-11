import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from 'app/shared/shared-material.module'; 

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrokerRoutes } from './broker.routing';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    PerfectScrollbarModule, 
    RouterModule.forChild(BrokerRoutes)
  ],
  declarations: [ ]
})
export class BrokerModule { }