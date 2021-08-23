import { Routes } from "@angular/router";    
import { CmpProfileComponent } from "./cmp-profile/cmp-profile.component";
import { DashboardDayOneComponent } from "./dashboard-day-one/dashboard-day-one.component";
 

export const CmpRoutes: Routes = [
  {
    path: "",
    children: [

      {
        path: "profile",
        component: CmpProfileComponent,
        data: { title: "Profile" }
      }, 
      {
        path: "day-one",
        component: DashboardDayOneComponent,
        data: { title: "Day One" }
      },  


 
    ]
  }
];
