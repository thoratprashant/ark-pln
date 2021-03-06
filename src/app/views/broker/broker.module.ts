import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { SharedMaterialModule } from 'app/shared/shared-material.module'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrokerRoutes } from './broker.routing';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ChartsModule } from 'ng2-charts';
import { FileUploadModule } from 'ng2-file-upload';
import { SharedPipesModule } from 'app/shared/pipes/shared-pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { SignupSuccessfulComponent } from './signup-successful/signup-successful.component';
import { DashboardDayOneComponent } from './dashboard-day-one/dashboard-day-one.component';
import { ProfileCompletedComponent } from './profile-completed/profile-completed.component';

// import { CommonDirectivesModule } from './sdirectives/common/common-directives.module';
 


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    PerfectScrollbarModule,  
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatChipsModule,
    MatCheckboxModule,
    MatRadioModule, 
    MatProgressBarModule, 
    NgxDatatableModule,
    ChartsModule, 
    FileUploadModule,
    SharedPipesModule,  
    RouterModule.forChild(BrokerRoutes)
  ],
  declarations: [ProfileComponent, SignupSuccessfulComponent, DashboardDayOneComponent, ProfileCompletedComponent ]
})
export class BrokerModule { }