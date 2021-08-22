import { Routes } from "@angular/router";  
import { DashboardDayOneComponent } from "./dashboard-day-one/dashboard-day-one.component";
import { LpProfileComponent } from "./lp-profile/lp-profile.component";
 

export const LoanProcessorRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "day-one",
        component: DashboardDayOneComponent,
        data: { title: "Day One" }
      }, 
      {
        path: "profile",
        component: LpProfileComponent,
        data: { title: "Profile" }
      }, 


 
    ]
  }
];
